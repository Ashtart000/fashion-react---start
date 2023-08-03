import Card from '../Card/Card';
import './arrivals.css'

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__card">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Arrivals;
