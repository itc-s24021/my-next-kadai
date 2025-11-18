import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const cards = [
    {
      title: "代表番組",
      items: ["上沼・高田のクギズケ", "上沼恵美子のこころ晴天"],
      href: "/programs",
    },
    {
      title: "肩書",
      items: [
        "（元）海原千里・万里",
        "（元）Ｍ-１グランプリ審査員",
        "（元）長寿お料理番組の司会",
      ],
      href: "/titles",
    },
    {
      title: "特徴",
      items: [
        "毒舌とユーモアを兼ね備えた話術",
        "豊富な司会・トーク番組の経験",
        "観客や出演者との距離感が絶妙",
      ],
      href: "/features",
    },
    {
      title: "愛称",
      items: ["えみちゃん", "ジョーカー", "白顔", "千里"],
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
          <div className={styles.profileValue}>上沼 恵美子（かみぬま えみこ）</div>

          <div className={styles.profileLabel}>生年月日</div>
          <div className={styles.profileValue}>1955年4月13日</div>

          <div className={styles.profileLabel}>出身地</div>
          <div className={styles.profileValue}>兵庫県淡路島</div>

          <div className={styles.profileLabel}>職業</div>
          <div className={styles.profileValue}>タレント、司会者、漫才師、歌手</div>

          <div className={styles.profileLabel}>活動期間</div>
          <div className={styles.profileValue}>1971年〜休養を経て現在</div>
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