import Image from "next/image";
import styles from "./InfluencersSection.module.css";

const influencers = [
  { img: "/images/influencer-1.jpg", name: "Lifestyle Creator", niche: "Fashion & Beauty", followers: "280K", er: "6.8%" },
  { img: "/images/influencer-2.jpg", name: "Tech Reviewer", niche: "Consumer Tech", followers: "540K", er: "4.2%" },
  { img: "/images/influencer-3.jpg", name: "Fitness Coach", niche: "Health & Wellness", followers: "190K", er: "9.1%" },
  { img: "/images/influencer-4.jpg", name: "Business Mentor", niche: "Entrepreneurship", followers: "320K", er: "5.5%" },
];

export default function InfluencersSection() {
  return (
    <section className={styles.section} id="influencers">
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className={styles.pill}>Influencer Network</div>
          <h2 className={styles.title}>500+ Creators. <span>Real Results.</span></h2>
          <div className={styles.rule} />
          <p className={styles.desc}>We don&apos;t just connect you with influencers — we match you with the exact creators your customers already trust.</p>
        </div>
        <div className={styles.grid}>
          {influencers.map((inf, i) => (
            <div key={i} className={`${styles.card} reveal delay-${i+1}`}>
              <div className={styles.imgWrap}>
                <Image src={inf.img} alt={inf.name} fill style={{ objectFit: "cover" }} />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.niche}>{inf.niche}</div>
                <h3 className={styles.name}>{inf.name}</h3>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <strong>{inf.followers}</strong><span>Followers</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metric}>
                    <strong>{inf.er}</strong><span>Eng. Rate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.cta} reveal`}>
          <p>Looking for creators in your niche?</p>
          <a href="#contact" className={styles.ctaBtn}>Access Our Network →</a>
        </div>
      </div>
    </section>
  );
}
