"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./BlogsSection.module.css";
import blogs from "@/data/blogs";

const BlogsSection = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredBlogs = () => {
    return selectedType === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedType);
  };

  return (
    <section className={styles.blogsSection}>
      <div className="container">
        {/* Filter buttons */}
        <div className={styles.blogFilters}>
          {[
            "All",
            "Logistics",
            "Technology",
            "Supply Chain",
            "Industry Trends",
            "Customer Experience",
          ].map((type) => (
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

        <div className={styles.blogGrid}>
          {filteredBlogs().map((blog, index) => (
            <div className={styles.blogCard} key={index}>
              <img
                src={blog.imgSrc}
                alt={blog.imgAlt}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCategory}>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogExcerpt}>{blog.content}</p>
                <Link href={`/blogs/${blog.id}`} className={styles.readMoreBtn}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
