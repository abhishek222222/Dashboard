import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
const addTocardHandler =  () => {

}
const Home = () => {
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore"> More</Link>
      </h1>
      <main>
        <ProductCard productId =" adasdmef" 
        name = " Macbook"
        price = {234}
        stock = {345}
        handler = { addTocardHandler}
        photo = "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg"></ProductCard>
      </main>
    </div>
  );
};

export default Home;
