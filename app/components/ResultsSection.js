import Image from "next/image";
import styles from "./ResultsSection.module.css";

const caseStudies = [
  { tag: "E-Commerce", title: "Fashion Brand 0→$4M", metric: "4,200%", metricLabel: "Revenue Growth", desc: "Built from scratch to $4M in 18 months using Meta ads, UGC content, and influencer seeding.", img: "/images/case-study-big.jpg", big: true },
  { tag: "SaaS", title: "B2B Lead Gen Machine", metric: "12×", metricLabel: "ROAS Achieved", desc: "Rebuilt their entire paid strategy to consistently deliver 12× return on ad spend.", img: "/images/case-study-sm1.jpg" },
  { tag: "Lifestyle", title: "Influencer Campaign", metric: "2.4M", metricLabel: "Organic Reach", desc: "One campaign, 80 creators, 2.4 million organic impressions in 6 days.", img: "/images/case-study-sm2.jpg" },
];

export default function ResultsSection() {
  return (
    <section className={styles.section} id="results">
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className={styles.pill}>Case Studies</div>
          <h2 className={styles.title}>Results That <span>Speak</span></h2>
          <div className={styles.rule} />
        </div>
        <div className={styles.grid}>
          {caseStudies.map((c, i) => (
            <div key={i} className={`${styles.card} ${c.big ? styles.big : ""} reveal delay-${i+1}`}>
              <div className={styles.cardImg}>
                <Image src={c.img} alt={c.title} fill style={{ objectFit: "cover" }} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{c.tag}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.metric}>
                  <span className={styles.metricNum}>{c.metric}</span>
                  <span className={styles.metricLabel}>{c.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
