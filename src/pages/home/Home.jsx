import "./home.scss";
import banner from '../../assets/banner-1.jpg';

import Navbar from '../../components/navbar/Navbar';
import Featured from "../../components/featured/Featured";

const Home = () => {
  return <div className="home">
    <Navbar />
    <Featured/>
  </div>;
};

export default Home;
