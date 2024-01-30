// pages/contact.js

import styles from '../styles/contact.module.css'; // Import CSS module

function Contact() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formControl}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" rows="5"></textarea>
            </div>
            <button className={styles.submitBtn} type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Contact;