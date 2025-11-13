import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.subtitle}>関西を代表する女性タレント・司会者</p>
        <h1 className={styles.title}>上沼恵美子</h1>
      </div>

      <div className={styles.profileSection}>
        <h2 className={styles.profileTitle}>プロフィール</h2>
        <div className={styles.profileGrid}>
          <div className={styles.profileLabel}>本名</div>
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
        <div className={styles.card}>
          <h2>代表番組</h2>
          <ul>
            <li>『上沼・高田のクギズケ』</li>
            <li>『上沼恵美子のこころ晴天』</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>肩書</h2>
          <ul>
            <li>（元）海原千里・万里</li>
            <li>（元）Ｍ-１グランプリ審査員</li>
            <li>（元）長寿お料理番組の司会</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>特徴</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>愛称</h2>
          <ul>
            <li>えみちゃん</li>
            <li>ジョーカー</li>
            <li>白顔</li>
            <li>千里</li>
          </ul>
        </div>
      </div>
    </main>
  );
}