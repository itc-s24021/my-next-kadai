import Link from "next/link";
import styles from "./page.module.css";
import { gettelevisionList } from "@/lib/microcms";

export default async function Television() {
  const television = await gettelevisionList();

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>代表番組</h1>
      </div>

      <div className={styles.container}>
        {television.contents.map((tv, index) => (
          <div key={index} className={styles.card}>
            <h2>{tv.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
