import BestSeller from '../component/homepage/BestSeller';
import Footer from '../component/homepage/Footer';
import Hero from '../component/homepage/Hero';
import Mitra from '../component/homepage/Mitra';
import Promo from '../component/homepage/Promo';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Promo />
            <BestSeller />
            <Mitra />
            <Footer />
        </>
    );
};

export default HomePage;
