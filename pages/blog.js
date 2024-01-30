import React from "react";
import styles from '@/styles/Blog.module.css';
import Link from "next/link";

function Blog() {
  return (
    <div>
      <div className={styles.header}>
        <h2>Blog Name</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.leftcolumn}>
          <Link href={'/blogpost/learn-javascript'}>
          <div className={styles.card}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className={styles.fakeimg}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
          </Link>
          <div className={styles.card}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className={styles.fakeimg}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className={styles.rightcolumn}>
          <div className={styles.card}>
            <h2>About Me</h2>
            <div className={styles.fakeimg}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className={styles.card}>
            <h3>Popular Post</h3>
            <div className={styles.fakeimg}>Image</div>
            <br />
            <div className={styles.fakeimg}>Image</div>
            <br />
            <div className={styles.fakeimg}>Image</div>
          </div>
          <div className={styles.card}>
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Blog;
