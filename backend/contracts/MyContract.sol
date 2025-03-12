// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelancePlatform {
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

    // Function to post a new job
    function postJob(string memory _title, string memory _description, uint _payment) public {
        jobCount++;
        jobs[jobCount] = Job(jobCount, _title, _description, _payment, payable(msg.sender), payable(address(0)), false);
    }

    // Function to apply for a job
    function applyForJob(uint _jobId) public {
        Job storage job = jobs[_jobId];
        require(job.freelancer == address(0), "Job already taken");
        job.freelancer = payable(msg.sender);
    }

    // Function to complete a job
    function completeJob(uint _jobId) public {
        Job storage job = jobs[_jobId];
        require(msg.sender == job.client, "Only client can mark complete");
        require(!job.isCompleted, "Job already completed");
        job.isCompleted = true;
        job.freelancer.transfer(job.payment);
    }
}
