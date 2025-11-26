import Link from "next/link";
import styles from "./page.module.css";
import { client, type Profile, type Card } from "@/lib/microcms";
import ImageGallery from "@/components/ImageGallery";

// 画像配列をコンポーネント外に移動
const fallbackImages = [
  "/profile.jpg",
  "/profile2.jpg",
  "/profile3.webp",
  "/profile4.webp",
  "/profile5.jpeg",
  "/profile6.avif",
];

export default async function Home() {
  // microCMSからデータを取得
  let profile: Profile | null = null;
  let cards: Card[] = [];

  try {
    profile = await client.get({
      endpoint: 'profile',
    });

    const cardsResponse = await client.get({
      endpoint: 'cards',
    });
    cards = cardsResponse.contents || [];
  } catch (error) {
    console.error('microCMS fetch error:', error);
  }

  // フォールバック用のデータ
  const defaultProfile = {
    name: "上沼 恵美子",
    nameKana: "かみぬま えみこ",
    birthDate: "1955年4月13日",
    birthPlace: "兵庫県淡路島",
    occupation: "タレント、司会者、漫才師、歌手",
    agency: "上沼事務所",
    activePeriod: "1971年〜休養を経て現在",
    subtitle: "関西を代表する女性タレント・司会者",
    images: fallbackImages.map(url => ({ url })),
  };

  const defaultCards = [
    { id: "1", title: "代表番組", slug: "programs" },
    { id: "2", title: "肩書", slug: "titles" },
    { id: "3", title: "特徴", slug: "features" },
    { id: "4", title: "愛称", slug: "nicknames" },
  ];

  const displayProfile = profile || defaultProfile;
  const displayCards = cards.length > 0 ? cards : defaultCards;

  // 画像URLの配列を作成
  const images = displayProfile.images?.map(img => img.url) || fallbackImages;

  // ランダムな初期画像インデックスを計算
  const randomIndex = Math.floor(Math.random() * images.length);

  return (
    <main className={`${styles.main} no-global-color`}>
      <div className={styles.header}>
        {/* クライアントコンポーネントをインポート */}
        <ImageGallery images={images} initialIndex={randomIndex} />
        
        <p className={styles.subtitle}>{displayProfile.subtitle}</p>
        <h1 className={styles.title}>{displayProfile.name}</h1>
      </div>

      <div className={styles.profileSection}>
        <h2 className={styles.profileTitle}>プロフィール</h2>
        <div className={styles.profileGrid}>
          <div className={styles.profileLabel}>名前</div>
          <div className={styles.profileLabel}>: {displayProfile.name}（{displayProfile.nameKana}）</div>

          <div className={styles.profileLabel}>生年月日</div>
          <div className={styles.profileLabel}>: {displayProfile.birthDate}</div>

          <div className={styles.profileLabel}>出身地</div>
          <div className={styles.profileLabel}>: {displayProfile.birthPlace}</div>

          <div className={styles.profileLabel}>職業</div>
          <div className={styles.profileLabel}>: {displayProfile.occupation}</div>

          <div className={styles.profileLabel}>所属事務所</div>
          <div className={styles.profileLabel}>: {displayProfile.agency}</div>

          <div className={styles.profileLabel}>活動期間</div>
          <div className={styles.profileLabel}>: {displayProfile.activePeriod}</div>
        </div>
      </div>

      <div className={styles.grid}>
        {displayCards.map((card) => (
          <Link key={card.id} href={`/${card.slug}`} className={styles.cardLink}>
            <div className={styles.card}>
              <h2>{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}