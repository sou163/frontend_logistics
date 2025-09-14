import React from "react";
import styles from "./JobContentSection.module.css";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

const JobContentSection = () => {
  return (
    <section className={styles.jobContent}>
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.jobDescription}>
            <h3>Job Description</h3>
            <p>
              We are seeking a seasoned{" "}
              <strong>Senior Operations Manager</strong> to lead and optimize
              our hyperlocal last-mile delivery operations. You will be
              responsible for designing and executing efficient logistics
              strategies, managing field and support teams, and ensuring timely,
              cost-effective, and customer-centric deliveries. This is a
              critical leadership role for someone who thrives in fast-paced,
              dynamic environments and has a proven track record in scaling
              logistics networks, particularly within urban delivery ecosystems.
            </p>

            <h4>Strategic Operations Management</h4>
            <ul>
              <li>
                Oversee day-to-day last-mile delivery operations across multiple
                cities.
              </li>
              <li>
                Build and implement scalable delivery models suited to
                hyperlocal geographies.
              </li>
              <li>
                Drive key operational KPIs including on-time delivery rate, cost
                per order, and customer satisfaction.
              </li>
            </ul>

            <h4>Team & Stakeholder Leadership</h4>
            <ul>
              <li>
                Lead and mentor a large cross-functional team including area
                managers, dispatch teams, delivery partners, and fleet
                supervisors.
              </li>
              <li>
                Collaborate closely with Product, Tech, Customer Support, and
                Business Development teams.
              </li>
            </ul>

            <h4>Partner & Fleet Management</h4>
            <ul>
              <li>
                Develop and manage relationships with delivery partners and
                third-party logistics providers (3PLs).
              </li>
              <li>
                Optimize delivery fleet operations, including workforce
                planning, route optimization, and vehicle utilization.
              </li>
            </ul>

            <h4>Data-Driven Decision Making</h4>
            <ul>
              <li>
                Use analytics and dashboards to identify process gaps and areas
                for improvement.
              </li>
              <li>
                Monitor real-time delivery data and act swiftly to resolve
                bottlenecks or SLA breaches.
              </li>
            </ul>

            <h4>Process Improvement & Automation</h4>
            <ul>
              <li>
                Drive continuous improvement projects using lean and six sigma
                methodologies.
              </li>
              <li>
                Work with tech teams to automate and digitize manual processes.
              </li>
            </ul>

            <h4>Compliance & Safety</h4>
            <ul>
              <li>
                Ensure adherence to legal and safety regulations across
                operations.
              </li>
              <li>
                Implement best practices in fleet safety, rider training, and
                workplace compliance.
              </li>
            </ul>

            <h4>Key Competencies</h4>
            <div className={styles.competenciesGrid}>
              <div className={styles.competencyItem}>
                Operational Excellence
              </div>
              <div className={styles.competencyItem}>
                Leadership & People Management
              </div>
              <div className={styles.competencyItem}>Analytical Thinking</div>
              <div className={styles.competencyItem}>
                Stakeholder Collaboration
              </div>
              <div className={styles.competencyItem}>
                Crisis & Risk Management
              </div>
              <div className={styles.competencyItem}>Customer Centricity</div>
              <div className={styles.competencyItem}>
                Tech-Savvy & Adaptable
              </div>
            </div>

            <h4>Requirements</h4>
            <ul>
              <li>
                Bachelor's Degree in Business, Operations, Supply Chain, or
                related field. MBA preferred.
              </li>
              <li>
                6–10 years of experience in operations, with at least 3 years in
                a senior leadership role in last-mile or hyperlocal delivery.
              </li>
              <li>
                Strong understanding of urban logistics, fleet optimization, and
                delivery platforms.
              </li>
              <li>
                Experience in e-commerce, foodtech, grocery, or quick commerce
                is highly desirable.
              </li>
              <li>
                Proven ability to scale operations in high-growth environments.
              </li>
              <li>
                Excellent analytical, communication, and leadership skills.
              </li>
              <li>
                Familiarity with logistics tech tools and platforms (TMS, OMS,
                etc.).
              </li>
            </ul>
          </div>

          <ApplicationForm />
        </div>
      </div>
    </section>
  );
};

export default JobContentSection;
