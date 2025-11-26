'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: string[];
  initialIndex?: number;
}

export default function ImageGallery({ images, initialIndex = 0 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex]}
          alt="プロフィール画像"
          width={300}
          height={300}
          className={styles.profileImage}
          priority
        />
      </div>
      {images.length > 1 && (
        <div className={styles.controls}>
          <button onClick={prevImage} className={styles.button}>
            ←
          </button>
          <span className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </span>
          <button onClick={nextImage} className={styles.button}>
            →
          </button>
        </div>
      )}
    </div>
  );
}
