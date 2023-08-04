import Card from '../Card/Card';
import './arrivals.css';
import cat01Img from '../../img/categories/cat-01.jpg';
import cat02Img from '../../img/categories/cat-02.jpg';
import cat03Img from '../../img/categories/cat-03.jpg';

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__card">
                    <Card title="Hoodies & Sweetshirt" image={cat01Img}/>
                    <Card title="Coats & Parkas" image={cat02Img} />
                    <Card title="Tees & T-Shirt" image={cat03Img} />
                </div>
            </div>
        </section>
    );
}

export default Arrivals;
