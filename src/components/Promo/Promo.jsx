import styles from './Promo.module.css';
import promoImg from '../../img/images/header-img.jpg'

function Promo () {
    return (
        <section className={styles.promo}>
            <div className="container">
                <div className={styles.promo__content}>
                    <div className={styles.promo__text}>
                        <div className={styles.promo__title}>
                            <span className={styles.highlight}>LET’S</span> EXPLORE <span className={styles.highlight__yellow}>UNIQUE</span> CLOTHES.</div>
                        <div className={styles.promo__desc}>Live for Influential and Innovative fashion!</div>
                        <div className={styles.promo__btn__wrapper}>
                            <a href="#!" className={styles.promo__btn}>Shop Now</a>
                        </div>
                    </div>
                    <div className={styles.promo__img}>
                        <img src={promoImg} alt='Promo' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;


