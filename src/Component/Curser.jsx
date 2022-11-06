import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import News from "./News";
const Curser = () => {
  return (
<>
    <Carousel className="mt-2">
      <Carousel.Item>
        <img className="d-block w-100" style={{height:550}} src="./news2.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height:550}} src="./news1.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height:550}} src="./news3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>

    <News/>
    </>
 
  );
  
  
};

export default Curser;
