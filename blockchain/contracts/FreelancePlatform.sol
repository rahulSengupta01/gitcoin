// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract FreelancePlatform is ReentrancyGuard {
    struct Job {
        uint id;
        string title;
        string description;
        uint payment;
        address payable client;
        address payable freelancer;
        bool isCompleted;
    }

    uint public jobCount = 0;
    mapping(uint => Job) public jobs;

    event JobPosted(uint jobId, address indexed client, string title);
    event JobTaken(uint jobId, address indexed freelancer);
    event JobCompleted(uint jobId);

    // Post a job with title, description, and payment (in wei)
    function postJob(string memory _title, string memory _description) external payable {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(msg.value > 0, "Payment must be greater than 0");

        jobCount++;
        jobs[jobCount] = Job({
            id: jobCount,
            title: _title,
            description: _description,
            payment: msg.value,
            client: payable(msg.sender),
            freelancer: payable(address(0)),
            isCompleted: false
        });

        emit JobPosted(jobCount, msg.sender, _title);
    }

    // Apply for an available job
    function applyForJob(uint _jobId) external {
        Job storage job = jobs[_jobId];
        require(job.id != 0, "Job does not exist");
        require(job.freelancer == address(0), "Job already taken");
        require(msg.sender != job.client, "Client cannot apply for their own job");

        job.freelancer = payable(msg.sender);

        emit JobTaken(_jobId, msg.sender);
    }

    // Complete job and release payment to freelancer
    function completeJob(uint _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];
        require(job.id != 0, "Job does not exist");
        require(msg.sender == job.client, "Only client can mark complete");
        require(!job.isCompleted, "Job already completed");
        require(job.freelancer != address(0), "No freelancer assigned");

        job.isCompleted = true;

        (bool sent, ) = job.freelancer.call{value: job.payment}("");
        require(sent, "Payment transfer failed");

        emit JobCompleted(_jobId);
    }
}
