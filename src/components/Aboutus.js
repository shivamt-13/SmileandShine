import React, { Component } from 'react';
import img1 from "../assets/shivam.jpg";
import img2 from "../assets/Tuski.jpeg";
import img3 from "../assets/Tanu.jpeg";
import img4 from "../assets/Anshu.jpeg";
import "./Aboutus.css";

class Aboutus extends Component {
    render(){
    return (
        <>
            <div className="about_body">
                <div className="about"></div>
                <center><h1>About Us</h1></center>
                <div className="card_pannel">
                    <div className="card">
                        <center><img className="card_img" src={img1} alt="shivam"/></center>
                        <center><h2>Shivam Thakur</h2></center>
                        <p>
                        Hey, I am Shivam Thakur, pursuing Btech from gyan ganga institute of technology and sciences, M.P.
                        I always wished to spread smile and kindness to the underprivileged section of society. 
                        Through smile and shine organization, I got an opportunity to fulfill my dreams.
                        </p>
                    </div>
                    <div className="card">
                        <center><img className="card_img" src={img3} alt="shivam"/></center>
                        <center><h2>Tanu Matdhari</h2></center>
                        <p>
                        Hello. I am Tanu Matdhari, pursuing Btech from Gyan  Ganga  Institute of  Technology and  Sciences,Mp.
                        I always want to make a difference in  life of people where living a normal life  is still a dream.
                        I believe in equality and impartiality.
                        </p>
                    </div>
                </div>
                <br/><br/>
                <div className="card_pannel">
                    <div className="card">
                        <center><img className="card_img" src={img2} alt="shivam"/></center>
                        <center><h2>Tuski Janwani</h2></center>
                        <p>
                        Hello everyone, this is Tushki Janwani . I am persuing my BTech degree from Gyan Ganga Institute of Technology 
                        and Sciences. This website is our small effort in the direction of contributing to our country's poor children's
                         education. As it is said, sometimes when we are generous in small, barely detectable ways.
                        </p>
                    </div>
                    <div className="card">
                        <center><img className="card_img" src={img4} alt="shivam"/></center>
                        <center><h2>Anshu Gupta</h2></center>
                        <p>
                        Hello everyone, this is Anshu Gupta . I am persuing my BTech degree from Gyan Ganga Institute of Technology and 
                        Sciences. This website is our small effort in the direction of contributing to our country's poor children's education. 
                        As it is said, education is for improving the lives of others.
                        </p>
                    </div>
                </div>
            </div>
        </>  
    )
    }
}

export default Aboutus;