import Link from "next/link";
import styles from "./page.module.css";

export default function Features() {
  const featuresList = [
    "毒舌とユーモアを兼ね備えた話術",
    "豊富な司会・トーク番組の経験",
    "観客や出演者との距離感が絶妙",
  ];

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>特徴</h1>
      </div>

      <div className={styles.container}>
        {featuresList.map((feature, index) => (
          <div key={index} className={styles.card}>
            <h2>{feature}</h2>
            <p>上沼恵美子さんの特徴の一つです。</p>
          </div>
        ))}
      </div>
    </main>
  );
}
