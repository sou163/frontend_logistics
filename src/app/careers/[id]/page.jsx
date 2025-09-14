import React from "react";
import Link from "next/link";
import styles from "./JobDetails.module.css";
import { JobContentSection } from "@/components";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

const JobDetails = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      <section className={styles.jobHeader}>
        <div className="container">
          <Link href="/careers" className={styles.backBtn}>
            ← Back to Careers
          </Link>

          <h1 className={styles.jobTitle}>Senior Operations Manager</h1>

          <div className={styles.jobMeta}>
            <span className={styles.jobLocation}>Bangalore</span>
            <span className={styles.jobType}>Full Time</span>
            <a href="#" className={styles.shareBtn}>
              Share
            </a>
          </div>
        </div>
      </section>
      <JobContentSection />
    </>
  );
};

export default JobDetails;
