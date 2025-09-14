import React from "react";
import { BlogsSection } from "@/components";
import styles from "./Blogs.module.css";

const BlogsPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>
            Insights That <span>Move the World</span>
          </h1>
          <p>
            Stay informed with analysis, stories, and thought leadership on
            logistics, supply chain, and hyperlocal delivery.
          </p>
        </div>
      </section>
      <BlogsSection />
    </>
  );
};

export default BlogsPage;
