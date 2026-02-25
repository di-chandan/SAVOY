// import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import ProductSection from '../components/ProductSection';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="main">
    
        <main className="content" id="content">
          <HeroSlider />
          <ProductSection />
        </main>
        
    </div>
  );
};

export default Home;