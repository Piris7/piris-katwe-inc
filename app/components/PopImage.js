import Image from "next/image";
import styles from "./PopImage.module.css";

export default function PopImage() {
  return (
    <div className={styles.wrap}>
      <Image src="/images/pop-image.jpg" alt="Piris Katwe Inc — brands impossible to ignore"
        fill style={{ objectFit: "cover" }} priority />
      <div className={styles.badge}>
        <div className={styles.pill}>Our Work</div>
        <div className={styles.line}>Brands that stop scrolls. Every time.</div>
      </div>
    </div>
  );
}
