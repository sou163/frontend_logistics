import React from "react";
import Link from "next/link";
import blogs from "@/data/blogs";
import styles from "./BlogDetails.module.css";

export async function generateStaticParams({ params }) {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;

  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <div className="container">
        <h1>Blog Not Found</h1>
        <p>The blog you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  return (
    <section className={`container ${styles.blogDetails}`}>
      <div className={styles.blogHeader}>
        <span className={styles.blogCategory} id="blogCategory">
          {blog.category}
        </span>
        <h1 className={styles.blogTitle} id="blogTitle">
          {blog.title}
        </h1>
        <div className={styles.blogMeta}>
          <span id="blogDate">{blog.date}</span> | <span>By Frontend Team</span>{" "}
          | <span>5 min read</span>
        </div>
      </div>

      <div className={styles.blogImgContainer}>
        <img
          src={blog.imgSrc}
          alt={blog.imgAlt}
          className={styles.blogImg}
          id="blogImage"
        />
      </div>

      <div className={styles.blogContent} id="blogContent">
        <p>{blog.content}</p>
      </div>

      <Link href="/blogs" className={styles.backBtn}>
        ← Back to All Blogs
      </Link>
    </section>
  );
};

export default BlogDetailsPage;
