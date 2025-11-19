import Link from "next/link";
import styles from "./page.module.css";

export default function Programs() {
  const representativePrograms = [
    "上沼・高田のクギズケ",
    "上沼恵美子のこころ晴天",
  ];

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>代表番組</h1>
      </div>

      <div className={styles.container}>
        {representativePrograms.map((program, index) => (
          <div key={index} className={styles.card}>
            <h2>{program}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
