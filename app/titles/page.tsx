import Link from "next/link";
import styles from "./page.module.css";

export default function Titles() {
  const titlesList = [
    "（元）海原千里・万里",
    "（元）Ｍ-１グランプリ審査員",
    "（元）長寿お料理番組の司会",
  ];

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>肩書</h1>
      </div>

      <div className={styles.container}>
        {titlesList.map((title, index) => (
          <div key={index} className={styles.card}>
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
