"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./JobOpeningsSection.module.css";

import jobs from "@/data/jobs";

const JobOpeningsSection = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredJobs = () => {
    return selectedType === "All"
      ? jobs
      : jobs.filter((job) => job.type === selectedType);
  };

  return (
    <section className={styles.jobOpenings}>
      <div className="container">
        <h2>
          Be Part of <span>Something Bigger</span>
        </h2>
        <p>
          From tech to operations, explore roles where your talent makes an
          impact.
        </p>

        {/* Filter buttons */}
        <div className={styles.jobFilters}>
          {["All", "Full-time", "Part-time", "Contract"].map((type) => (
            <button
              key={type}
              className={`${styles.filterBtn}
                ${selectedType === type ? styles.active : ""}
              `}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className={styles.jobsGrid}>
          {filteredJobs().map((job, index) => (
            <div className={styles.jobCard} key={index}>
              <div className={styles.jobTitle}>{job.title}</div>
              <div className={styles.jobMeta}>
                <span className={styles.jobType}>{job.type}</span>
                <span className={styles.jobLocation}>{job.location}</span>
              </div>
              <div className={styles.jobDescription}>{job.description}</div>
              <Link
                href={`/careers/${job.id}`}
                className={styles.viewDetailsBtn}
              >
                More Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;
