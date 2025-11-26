import Link from "next/link";
import styles from "./page.module.css";
import { getnicknameList } from "@/lib/microcms";

export default async function Nicknames() {
  const nicknames = await getnicknameList();

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>愛称</h1>
      </div>

      <div className={styles.container}>
        {nicknames.contents.map((nickname, index) => (
          <div key={index} className={styles.card}>
            <h2>{nickname.nickname}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
