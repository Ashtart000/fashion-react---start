import styles from './Card.module.scss';
import cat01Img from '../../img/categories/cat-01.jpg'

const Card = () => {
    return (
        <div className={styles.card}>
            <img src={cat01Img} alt='Category1' />
            <div className={styles.card__body}>
                <div className={styles.card__text}>

                </div>
                <div className={styles.card__icon}>

                </div>
            </div>
        </div>
    );
}

export default Card;
