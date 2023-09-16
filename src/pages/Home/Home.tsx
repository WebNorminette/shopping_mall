import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <img
        className={styles.image}
        src="//www.stussy.com/cdn/shop/files/Mobile_d32401d7-0741-4b8e-9268-daa4f1bb7ee0.jpg?v=1693992986&amp;"
        alt="stussy"
      />
      <div style={{ fontSize: '1rem' }}>aa</div>
    </section>
  );
}
