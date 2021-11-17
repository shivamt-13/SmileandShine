import React,{Component} from 'react'
import './Footer.css'
import {FaHome,FaDonate,FaRocket} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {BsBuilding} from 'react-icons/bs';
import {AiOutlineInfoCircle} from 'react-icons/ai';


class footer extends Component{
    render(){
        return (
            <div>
            <div className="footer">
                <div className="footer-container">
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Quick Links</h1><hr style={{width:"100%"}}/>
                        <ul className="footer-quick-links" type="none">
                            <li className="footer-li"> 
                            <p style={{fontSize:"1.2rem" ,color:"white"}}><FaHome style={{fontSize:"1.2rem" ,color:"white"}}/> Home</p>
                            </li>
                            <li className="footer-li">
                            <p style={{fontSize:"1.2rem" ,color:"white"}}><FaDonate style={{fontSize:"large" ,color:"white"}}/> Donate</p>
                            </li>
                            <li className="footer-li">
                            <p style={{fontSize:"1.2rem" ,color:"white"}}><AiOutlineInfoCircle style={{fontSize:"large" ,color:"white"}}/> About Us</p>
                            </li>
                            <li className="footer-li">
                            <p style={{fontSize:"1.2rem" ,color:"white"}}><FaRocket style={{fontSize:"large" ,color:"white"}}/> Vision</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Reach Us</h1> <hr style={{width:"100%"}}/>
                        <p className="footer-address"><IoMdCall/> +91 22-49723740
                        <br/><IoMdCall/> +91 22-49743741</p>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Mail Us</h1> <hr style={{width:"100%"}}/>
                        <p className="footer-address"><MdEmail/> shivam@smiles.in
                        <br/><MdEmail/> shineandsmile@gamil.com</p>
                    </div>
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Address</h1><hr style={{width:"100%"}}/>
                        <p className="footer-address"><BsBuilding/> Gyan Ganga Institute Of Technology And Sciences<br/>P.O. Tilwara Ghat<br/>Near Bargi Hills <br/>Jabalpur-400053
                        <br/></p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default footer