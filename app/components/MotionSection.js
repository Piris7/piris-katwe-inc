import Image from "next/image";
import styles from "./MotionSection.module.css";

export default function MotionSection() {
  return (
    <section className={styles.section} id="motion">
      <div className={styles.container}>
        <div className={`${styles.left} reveal-left`}>
          <div className={styles.pill}>Motion Design</div>
          <h2 className={styles.title}>Visuals That <span>Move</span> People</h2>
          <div className={styles.rule} />
          <p className={styles.desc}>
            We produce cinema-quality motion graphics, brand films, and social-first video content
            that stops the scroll and burns your brand into memory.
          </p>
          <ul className={styles.list}>
            {["Brand Films & Showreels","Social-First Video Content","Logo & UI Animation","Product Visualisation","Reels & TikTok Production"].map(item => (
              <li key={item} className={styles.listItem}>
                <span className={styles.check}>✓</span>{item}
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.btn}>Start a Motion Project →</a>
        </div>
        <div className={`${styles.right} reveal-right`}>
          <div className={styles.imgMain}>
            <Image src="/images/motion-hero.jpg" alt="Motion Design" fill style={{ objectFit: "cover" }} />
            <div className={styles.playBtn}>
              <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className={styles.imgThumb}>
            <Image src="/images/motion-thumbnail.jpg" alt="Motion Thumbnail" fill style={{ objectFit: "cover" }} />
            <div className={styles.thumbBadge}>
              <strong>50+</strong>
              <span>Motion Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
