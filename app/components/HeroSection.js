import styles from "./HeroSection.module.css";

const stats = [
  { num: "2,400+", label: "Campaigns Launched" },
  { num: "98%",    label: "Client Retention Rate" },
  { num: "500+",   label: "Influencer Partners" },
  { num: "12×",    label: "Average ROAS Delivered" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      {/* Ambient BG video */}
      <div className={styles.bgWrap}>
        <video className={styles.bgVideo} src="/videos/nexus-showreel.mp4"
          autoPlay muted playsInline loop />
      </div>
      <div className={styles.grid} />
      <div className={styles.overlay} />

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <div className={styles.dot} />
          <span>Award-Winning Digital Agency</span>
        </div>
        <h1 className={styles.headline}>
          We Build<br />
          <span className={styles.accent}>Brands</span> That<br />
          Dominate
        </h1>
        <p className={styles.sub}>
          From paid ads to viral content — we engineer growth strategies that turn
          unknown brands into market leaders. Results guaranteed.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnStart}>
            Start Your Growth <span className={styles.arrow}>→</span>
          </a>
          <a href="#results" className={styles.btnResults}>
            See Our Results ↓
          </a>
        </div>
      </div>

      {/* Floating badges */}
      <div className={styles.badges}>
        <div className={styles.badge}>
          <div className={styles.badgeNum}>$2B+</div>
          <div className={styles.badgeTxt}>Client Revenue<br />Generated</div>
        </div>
        <div className={`${styles.badge} ${styles.badgeSm}`}>
          <div className={styles.badgeNum} style={{fontSize:"28px"}}>500+</div>
          <div className={styles.badgeTxt}>Brands<br />Scaled</div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
