import styles from "./ProcessSection.module.css";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We dig into your brand, market, competitors, and goals. No fluff — just clarity on what it'll take to win." },
  { num: "02", title: "Strategy Build", desc: "Our team architects a custom growth plan with channel mix, creative direction, budget allocation, and KPIs." },
  { num: "03", title: "Launch & Execute", desc: "Ads go live, content rolls out, influencers activate. We move fast without cutting corners." },
  { num: "04", title: "Scale & Optimise", desc: "We double down on what works, kill what doesn't, and compound your results every single month." },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className={styles.pill}>How We Work</div>
          <h2 className={styles.title}>Our <span>Process</span></h2>
        </div>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={`${styles.step} reveal delay-${i+1}`}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepLine} />
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
