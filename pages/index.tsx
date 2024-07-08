import Link from 'next/link';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>説明しりとり</h1>
                <div className={styles.buttonContainer}>
                    <Link href="/game" legacyBehavior>
                        <button className={styles.styledButton}>ゲームスタート</button>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <button className={styles.styledButton}>ルール説明</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;