import React, { useState, useEffect } from 'react';
import './Sidedrawer.css';
import Backdrop from './Backdrop';
import Logo from '../../assets/logo.png';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Sidedrawer = ({show, closeSidedrawer}) => {
    const [closing, setClosing] = useState(false);
    const closeSidedrawerUtil = () => {
        setClosing(true);
        setTimeout(() => closeSidedrawer(), 300);
    }

    useEffect(() => {
        return () => {
            setClosing(false);
        }
        
    }, [show])

    return (
        <div>
            <Backdrop closeSidedrawer={closeSidedrawerUtil} />
            <div className={"Sidedrawer " + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column p-1 flex-end">
                        <button onClick={closeSidedrawerUtil}>
                            <AiOutlineCloseCircle style={{fontSize:"2.5rem",fontWeight:"bold"}}/>
                        </button>
                    </div>
                    <div className="Sidedrawer_Logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <ul className="d-flex flex-column mt-3 Sidedrawer_Links">
                    <li className="sidedrawer-menu">
                    <p className="Header_Links">HOME</p>
                    </li>
                    <li className="sidedrawer-menu">
                    <p className="Header_Links">DOANTE</p>
                    </li>
                    <li className="sidedrawer-menu">
                    <p className="Header_Links">ABOUT US</p>
                    </li>
                    <li className="sidedrawer-menu">
                    <p className="Header_Links">VISION</p>
                    </li>
                    <br/>
                </ul>
            </div>
        </div>
    )
}

export default Sidedrawer;