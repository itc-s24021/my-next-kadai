import Link from "next/link";
import styles from "./page.module.css";
import { getfeaturesList } from "@/lib/microcms";

export default async function Features() {
  const features = await getfeaturesList();

  return (
    <main className={styles.main}>
      <Link href="/" className={`${styles.backLink} no-global-color`}>
        ← ホーム
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>特徴</h1>
      </div>

      <div className={styles.container}>
        {features.contents.map((feature, index) => (
          <div key={index} className={styles.card}>
            <h2>{feature.features}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
