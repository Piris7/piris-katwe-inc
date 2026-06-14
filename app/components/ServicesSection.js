import Image from "next/image";
import styles from "./ServicesSection.module.css";

const services = [
  { title: "Paid Advertising", desc: "Meta, Google & TikTok ads engineered for maximum ROAS. We turn ad spend into revenue machines.", icon: "📈", img: "/images/service-motion.jpg" },
  { title: "Social Media Management", desc: "Daily content, community management, and growth hacking across all platforms.", icon: "📱", img: "/images/motion-hero.jpg" },
  { title: "Content Creation", desc: "Scroll-stopping photos, videos, and copy that build brand equity and drive conversions.", icon: "🎬", img: "/images/case-study-big.jpg" },
  { title: "Motion Design", desc: "Cinema-grade animations and video production that make your brand unforgettable.", icon: "✨", img: "/images/motion-thumbnail.jpg" },
  { title: "Influencer Marketing", desc: "Strategic partnerships with creators who actually move product — not just followers.", icon: "🤝", img: "/images/influencer-1.jpg" },
  { title: "Brand Strategy", desc: "Deep positioning work that carves out an unmistakable identity in your market.", icon: "🎯", img: "/images/pop-image.jpg" },
  { title: "Performance Marketing", desc: "Full-funnel optimisation from first touch to loyal customer, powered by data.", icon: "🚀", img: "/images/case-study-sm1.jpg" },
  { title: "Creative Direction", desc: "Cohesive visual identities and campaign concepts that unify every touchpoint.", icon: "🎨", img: "/images/case-study-sm2.jpg" },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className={styles.pill}>What We Do</div>
          <h2 className={styles.title}>Services Built to <span>Scale</span></h2>
          <div className={styles.rule} />
          <p className={styles.desc}>Everything your brand needs to go from unknown to unstoppable — under one roof.</p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} reveal delay-${(i % 4) + 1}`}>
              <div className={styles.cardImg}>
                <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
                <div className={styles.cardImgOverlay} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <a href="#contact" className={styles.cardLink}>Get Started →</a>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
