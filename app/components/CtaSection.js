import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={`${styles.inner} reveal`}>
        <div className={styles.pill}>Ready to Dominate?</div>
        <h2 className={styles.title}>Let&apos;s Build Your<br /><span>Brand Together</span></h2>
        <p className={styles.desc}>Book a free 30-minute strategy call. No pitch decks, no fluff — just an honest conversation about what it will take to scale your brand.</p>
        <div className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="email" placeholder="Email Address" className={styles.input} />
          <input type="text" placeholder="Your Brand / Company" className={styles.input} />
          <a href="mailto:hello@piriskatweinc.com" className={styles.submit}>
            Book My Strategy Call <span>→</span>
          </a>
        </div>
        <div className={styles.trust}>
          {["Free 30-min call", "No long-term contracts", "Results or we work for free", "Response within 24h"].map(t => (
            <div key={t} className={styles.trustItem}>
              <span className={styles.check}>✓</span>{t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
