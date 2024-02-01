import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import Category from "./Category/Category";

import ProductMapping from "./ProductMapping/ProductMapping";
import MiniNavbar from "./../Shared/MiniNavbar";
import Navbar from "../Shared/Navbar";

const HomePage = () => {
  return (
    <div>
      <MiniNavbar />
      <Navbar />
      <Banner />
     
      <Category />
      <BestSelling />
      <ProductMapping />
    </div>
  );
};

export default HomePage;
