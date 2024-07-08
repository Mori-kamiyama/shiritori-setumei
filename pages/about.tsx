import Link from 'next/link';
import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ルール説明</h1>
            <div className={styles.content}>
                <p className={styles.intro}>説明しりとりは、単語を直接言うのではなく、その単語の説明を使ってしりとりを行う創造的なゲームです。ルールカードによって様々な変化が加わり、より楽しく、より挑戦的になります！</p>

                <h2 className={styles.sectionTitle}>ゲームの流れ</h2>
                <ol className={styles.ruleList}>
                    <li><strong>開始：</strong>最初のプレイヤーが単語を決め、その説明をします。</li>
                    <li><strong>予測と次の説明：</strong>次のプレイヤーは単語を予測し、新しい単語の説明を行います。</li>
                    <li><strong>しりとり：</strong>前の単語の最後の文字で始まる単語を選びます。</li>
                    <li><strong>ルールカード：</strong>2枚のカードが適用され、ゲームに変化を加えます。</li>
                    <li><strong>勝敗：</strong>全員で最後まで続けられれば勝利です。</li>
                </ol>

                <h2 className={styles.sectionTitle}>ルールカードの例</h2>
                <div className={styles.cardGrid}>
                    {['COUNT', 'TIME', 'ONE', 'PLACE', 'TODAY', 'WATCH', 'DENIAL', 'HISTORY'].map(card => (
                        <div key={card} className={styles.card}>{card}</div>
                    ))}
                </div>

                <div className={styles.note}>
                    <h3>注意事項</h3>
                    <p>参加者全員で協力し、楽しくゲームを進行しましょう！</p>
                </div>
            </div>
            <Link href="/" legacyBehavior>
                <button className={styles.button}>ホームに戻る</button>
            </Link>
        </div>
    );
};

export default About;