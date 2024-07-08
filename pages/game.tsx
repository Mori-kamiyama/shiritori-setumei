import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './game.module.css';

const images = [
    //'/images/ANOTHER.png',
    '/images/COUNT.png',
    '/images/DENIAL.png',
    '/images/HISTORY.png',
    '/images/ONE.png',
    '/images/PLACE.png',
    '/images/TIME.png',
    '/images/TODAY.png',
    '/images/WATCH.png',
];

const Game = () => {
    const [currentImages, setCurrentImages] = useState<string[]>([images[0], images[1]]);

    const shuffleImages = () => {
        const shuffled = images.sort(() => 0.5 - Math.random());
        setCurrentImages([shuffled[0], shuffled[1]]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ゲーム画面</h1>
            <div className={styles.imageContainer}>
                {currentImages.map((img, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <Image src={img} alt={`Random ${index + 1}`} width={363} height={500} layout="responsive" />
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.styledButton} onClick={shuffleImages}>ランダムカード</button>
                <Link href="/" legacyBehavior>
                    <button className={styles.styledButton}>戻る</button>
                </Link>
            </div>
        </div>
    );
};

export default Game;