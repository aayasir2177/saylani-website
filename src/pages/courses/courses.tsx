import "./courses.css";

import { Outlet, Link, useNavigate } from "react-router-dom";

import image1 from "../../assets/courses-images/modern-design.jpg";
import image2 from "../../assets/courses-images/clean-design.jpg";
import image3 from "../../assets/courses-images/great-support.jpg";
import image4 from "../../assets/courses-images/easy-customise.jpg";
import image5 from "../../assets/courses-images/unlimited-features.jpg";
import image6 from "../../assets/courses-images/advanced-option.jpg";

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function Courses() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid mt-8 p-8">
        <div className="titleHolder">
          <h2>Mass IT Training Courses</h2>
        </div>
        <Row gutter={[34, 34]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
              cover={<img alt="Modern Design" src={image1} />}
              onClick={() => {
                navigate("/courses/course1");
              }}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to={"/courses/course2"}>
              <Card
                className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                cover={<img alt="Test" src={image2} />}
              >
                <Meta title="Clean and Elegant" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to={"/courses/course3"}>
              <Card
                className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                cover={<img alt="Test" src={image3} />}
              >
                <Meta title="Great Support" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to={"/courses/course4"}>
              <Card
                className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                cover={<img alt="Test" src={image4} />}
              >
                <Meta title="Easy to customise" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to={"/courses/course5"}>
              <Card
                className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                cover={<img alt="Test" src={image5} />}
              >
                <Meta title="Unlimited Features" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to={"/courses/course6"}>
              <Card
                className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                cover={<img alt="Test" src={image6} />}
              >
                <Meta title="Advanced Options" />
              </Card>
            </Link>
          </Col>
        </Row>

        <Outlet />
      </div>
    </div>
  );
}

export default Courses;
