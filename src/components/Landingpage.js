import React, { Component } from 'react';
import img1 from "../assets/poor3.jpg";
import img2 from "../assets/poor6.jpg";
import img3 from "../assets/poor9.jpg";
import "./Landingpage.css";
import Caraousel from "./elements/Carousel"

class LandingPage extends Component {
    render(){
    return (
        <>
            <div className="main_body">
            <Caraousel/>
            <br/>
                <div className="main_component">
                    <div className="main_component_part1">
                        <img className="component_img" src={img1}/>
                    </div>
                    <div className="main_component_part2">
                        <p>
                            Let us reach out to the children. Let us do whatever we can to support their fight to rise above their pain and suffering.
                            Every child , no matter who they are or where they come from, deserve nourishment, education and health.
                        </p>
                    </div>
                </div>
                <div className="main_component">
                    <div className="main_component_part2">
                        <p>
                            "The Children of today will make the india of tomorrow. The way we bring them up will determine the future of the country."
                            <br/>-Jawaharlal Nehru
                        </p>
                    </div>
                    <div className="main_component_part1">
                        <img className="component_img" src={img2}/>
                    </div>
                </div>
                <div className="main_component">
                    <div className="main_component_part1">
                        <img className="component_img" src={img3}/>
                    </div>
                    <div className="main_component_part2">
                        <p>
                        Education is the best way to out of poverty. Actually, there are many regions that children are 
                        out of school.Therefore, in order to change perception and give education for people, this is 
                        our little initiative towards the same.
                        </p>
                    </div>
                </div>
            </div>
        </>  
    )
    }
}

export default LandingPage;