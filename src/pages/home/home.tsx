import "./home.css";

import { Carousel } from "antd";

import img1 from "../../assets/slider-images/1.jpg";
import img2 from "../../assets/slider-images/2.jpg";
import img3 from "../../assets/slider-images/3.jpg";
import img4 from "../../assets/slider-images/4.jpg";
import Courses from "../../components/courses/courses";
import MediaUpdates from "../../components/media-updates/media-updates";

const Home: React.FC = () => (
  <>
    <Carousel autoplay className="carousel">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>

      <div>
        <img src={img4} />
      </div>
    </Carousel>

    <Courses />

    <MediaUpdates />
  </>
);

export default Home;
