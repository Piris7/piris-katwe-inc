"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./BannerIntro.module.css";

export default function BannerIntro({ onDone }) {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef(null);

  const dismiss = () => {
    setVisible(false);
    document.body.style.overflow = "";
    onDone?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(dismiss, 8000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.wrap}>
      <video ref={videoRef} className={styles.video} src="https://res.cloudinary.com/db7rymk1j/video/upload/v1781461786/piris-katwe/banner-intro.mp4"
        autoPlay muted playsInline />
      <div className={styles.overlay} />
      <div className={styles.grid} />
      <div className={styles.brand}>
        <div className={styles.logo}>PIRIS KATWE<span> Inc</span></div>
        <div className={styles.tagline}>We Build Brands That Dominate</div>
      </div>
      <div className={styles.progress} />
      <button className={styles.skip} onClick={dismiss}>Skip ›</button>
    </div>
  );
}
