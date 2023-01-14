import "./media-updates.css";

import image1 from "../../assets/news-images/modern-design.jpg";
import image2 from "../../assets/news-images/clean-design.jpg";
import image3 from "../../assets/news-images/great-support.jpg";
import image4 from "../../assets/news-images/easy-customise.jpg";
import image5 from "../../assets/news-images/unlimited-features.jpg";
import image6 from "../../assets/news-images/advanced-option.jpg";

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function MediaUpdates() {
  return (
    <div>
      <div className="container-fluid mt-8 p-8">
        <div className="titleHolder">
          <h2>Media Updates</h2>
         
        </div>
        <Row gutter={[34, 34]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MediaUpdates;
