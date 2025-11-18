import Link from "next/link";
import styles from "./page.module.css";

export default function Nicknames() {
  const nicknames = ["えみちゃん", "ジョーカー", "白顔", "千里"];

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>愛称</h1>
      </div>

      <div className={styles.container}>
        {nicknames.map((nickname, index) => (
          <div key={index} className={styles.card}>
            <h2>{nickname}</h2>
            <p>上沼恵美子さんの愛称です。</p>
          </div>
        ))}
      </div>
    </main>
  );
}
