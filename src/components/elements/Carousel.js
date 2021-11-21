import React from "react";
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import './Carousel.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from "../../assets/poor1.jpeg";
import img2 from "../../assets/poor2.jpeg";
import img3 from "../../assets/poor5.jpeg";
const App = () => {
  return (
    <center>
    <div className="Carousel">
    <CCarousel controls transition="crossfade" style={{width:"96%",marginTop:"90px"}}>
        <CCarouselItem>
          <CImage className="d-block w-100" src={img1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={img2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={img3} alt="slide 3" />
        </CCarouselItem>
    </CCarousel>
    </div>
    </center>
  );
};
export default App;