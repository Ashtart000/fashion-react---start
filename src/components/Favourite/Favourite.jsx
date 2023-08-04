import Card from '../Card/Card';
import styles from './Favourite.module.scss'
import fav01Img from '../../img/images/promo-01.jpg';
import fav02Img from '../../img/images/promo-02.jpg';

const Favourite = () => {
    return (
        <section className={styles.favourite}>
            <div className="container">
                <div className={styles.favourite__header}>
                    <h2 className="title-2">Young’s Favourite</h2>
                </div>
                <div className={styles.favourite__card}>
                    <Card title="Trending on instagram" image={fav01Img}/>
                    <Card title="All Under $40" image={fav02Img} />
                </div>
            </div>
        </section>
    );
}

export default Favourite;