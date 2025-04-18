import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import Navbar from "../Navbar/navbar";
import "./FindWork.css";

const FindWork = () => {
  return (
    <div className="find-work-container">
  
      <div className="find-work-header">
        <h1>Recommended jobs for you</h1>
        <p>Find jobs that match your skills and preferences</p>
      </div>
      
      <div className="job-listings">
        <JobCard
          title="Java Full Stack Developer"
          company="Flywings Enterprises"
          location="Pune"
          experience="0 Yrs"
          salary="₹1-4 Lacs PA"
          description="Design user interactions on web pages Develop and implement highly responsive ..."
          skills="Java, Hibernate, Spring Boot, Microservices"
        />
        <JobCard
          title="Web Developer"
          company="Visiweb Solutions Pvt. Ltd."
          location="Delhi / NCR"
          experience="0-1 Yrs"
          salary="Not disclosed"
          description="Develop, test, and maintain web applications using PHP ..."
          skills="PHP, Laravel, CodeIgniter, Web technologies"
        />
      </div>
    </div>
  );
};

const JobCard = ({ title, company, location, experience, salary, description, skills }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p className="job-info">{company} - {location}</p>
      <p className="job-info">{experience} | {salary}</p>
      <p>{description}</p>
      <p className="job-skills">{skills}</p>
      <div className="job-actions">
        <button className="apply-button">Apply Now</button>
        <FaRegBookmark className="bookmark-icon" />
      </div>
    </div>
  );
};

export default FindWork;