import styles from './Sale.module.scss'
import saleImg from '../../img/images/promo-img.jpg'

function Sale () {

    return (
        <section className={styles.sale}>
            <div className="container">
                <div className={styles.sale__content}>
                    
                    <div className={styles.sale__img}>
                        <img src={saleImg} alt='Sale' />
                    </div>
                    <div className={styles.plusBtn}>
                    <div className={styles.sale__text}>
                        <div className={styles.white__block}></div>
                        <div className={styles.sale__title}>PAYDAY SALE NOW</div>
                        <p className={styles.sale__desc}>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                        <p className={styles.sale__desc__bold}>1 June - 10 June 2021</p>
                        <p className={styles.sale__desc}>*Terms & Conditions apply</p>
                    </div>
                    <button className={styles.sale__btn}>
                        <a href="#!">Shop Now</a>
                    </button> 
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Sale;