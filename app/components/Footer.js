import styles from "./Footer.module.css";

const services = ["Paid Advertising","Social Media Management","Content Creation","Motion Design","Influencer Marketing","Brand Strategy","Performance Marketing","Creative Direction"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.logo}>PIRIS KATWE<span className={styles.inc}> Inc</span></div>
          <p className={styles.brandDesc}>We build brands that dominate. Strategic marketing, stunning content, and performance-driven growth for ambitious companies.</p>
          <div className={styles.social}>
            {["Instagram","TikTok","LinkedIn","Twitter"].map(s => (
              <a key={s} href="#" className={styles.socialBtn}>{s[0]}</a>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.colList}>
            {services.map(s => <li key={s}><a href="#services" className={styles.colLink}>→ {s}</a></li>)}
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.colList}>
            {[["Home","#home"],["Results","#results"],["Process","#contact"],["Influencers","#influencers"],["Contact","#contact"]].map(([l,h]) => (
              <li key={l}><a href={h} className={styles.colLink}>→ {l}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <div className={styles.contactList}>
            <a href="mailto:hello@piriskatweinc.com" className={styles.contactItem}>hello@piriskatweinc.com</a>
            <a href="tel:+000000000" className={styles.contactItem}>+000 000 0000</a>
            <div className={styles.contactItem}>Kinshasa, DRC</div>
          </div>
          <a href="#contact" className={styles.ctaBtn}>Book a Call →</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Piris Katwe Inc. All rights reserved.</span>
        <span>Built for brands that refuse to be ignored.</span>
      </div>
    </footer>
  );
}
