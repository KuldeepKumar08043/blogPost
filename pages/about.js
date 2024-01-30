// pages/about.js
import styles from '../styles/about.module.css'; // Import CSS module

function About() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to our company's About Us page! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam euismod libero et elit dapibus, ut eleifend ligula euismod.
          Cras vel tempor elit. Phasellus pharetra, justo nec convallis vulputate, sapien elit
          tempor justo, id sollicitudin odio turpis vel felis. Proin et magna eu purus iaculis
          convallis et non elit. Nam fermentum ex ut odio varius, id fermentum metus dictum.
          Aliquam erat volutpat. Donec ac ultricies mauris. Nulla facilisi.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
