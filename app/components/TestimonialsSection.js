"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, LUMORA Fashion", text: "Piris Katwe Inc took us from $0 to $4M in 18 months. I've worked with big agencies before — none came close to this level of strategy and execution.", img: "/images/avatar-1.jpg", stat: "4,200% revenue growth" },
  { name: "James Okafor", role: "Founder, Apex Digital", text: "Our ROAS was sitting at 2× before they touched our ads. Within 60 days they had us consistently at 11-13×. The paid ads team is genuinely elite.", img: "/images/avatar-2.jpg", stat: "11× ROAS achieved" },
  { name: "Diana Chen", role: "Marketing Director, Velox", text: "The influencer campaign they ran for our product launch was flawless. 2.4 million organic impressions in one week. Our competitors are still trying to figure out how we did it.", img: "/images/avatar-3.jpg", stat: "2.4M organic impressions" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className={styles.pill}>Testimonials</div>
          <h2 className={styles.title}>Don&apos;t Take Our <span>Word</span> For It</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.quote}>&ldquo;</div>
          <p className={styles.text}>{t.text}</p>
          <div className={styles.statBadge}>{t.stat}</div>
          <div className={styles.author}>
            <div className={styles.avatar}>
              <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <strong className={styles.name}>{t.name}</strong>
              <span className={styles.role}>{t.role}</span>
            </div>
          </div>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
