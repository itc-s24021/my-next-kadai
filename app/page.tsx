import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const cards = [
    {
      title: "代表番組",
      href: "/programs",
    },
    {
      title: "肩書",
      href: "/titles",
    },
    {
      title: "特徴",
      href: "/features",
    },
    {
      title: "愛称",
      href: "/nicknames",
    },
  ];

  return (
    <main className={`${styles.main} no-global-color`}>
      <div className={styles.header}>
        <p className={styles.subtitle}>関西を代表する女性タレント・司会者</p>
        <h1 className={styles.title}>上沼恵美子</h1>
      </div>

      <div className={styles.profileSection}>
        <h2 className={styles.profileTitle}>プロフィール</h2>
        <div className={styles.profileGrid}>
          <div className={styles.profileLabel}>名前</div>
          <div className={styles.profileLabel}>: 上沼 恵美子（かみぬま えみこ）</div>

          <div className={styles.profileLabel}>生年月日</div>
          <div className={styles.profileLabel}>: 1955年4月13日</div>

          <div className={styles.profileLabel}>出身地</div>
          <div className={styles.profileLabel}>: 兵庫県淡路島</div>

          <div className={styles.profileLabel}>職業</div>
          <div className={styles.profileLabel}>: タレント、司会者、漫才師、歌手</div>

          <div className={styles.profileLabel}>所属事務所</div>
          <div className={styles.profileLabel}>: 上沼事務所</div>

          <div className={styles.profileLabel}>活動期間</div>
          <div className={styles.profileLabel}>: 1971年〜休養を経て現在</div>
        </div>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className={styles.cardLink}>
            <div className={styles.card}>
              <h2>{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}