import styles from "./Ticker.module.css";

const items = ["Paid Advertising","Social Media Management","Content Creation","Motion Design",
  "Influencer Marketing","Brand Strategy","Performance Marketing","Creative Direction"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot}>✦</span>{item}
          </div>
        ))}
      </div>
    </div>
  );
}
