import styles from './Card.module.scss';
import cat01Img from '../../img/categories/cat-01.jpg';
import arrowImg from '../../img/icons/arrow.svg'

const Card = ({title, image}) => {
    return (
        <div className={styles.card}>
            <a href='!#'>
            <img src={image} alt='Category1' />
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__muted}>Explore Now!</p>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt='Arrow icon' />
                </div>
            </div>
            </a>
        </div>
    );
}

export default Card;
