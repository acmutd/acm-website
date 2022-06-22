import React from 'react';
import rainbowFooter from '../../assets/rainbowFooter.png';
import './Footer.css';


function Footer(props) {
    return (
        <div>
       <img className='rainbowFooter'src={rainbowFooter}/>
       <h3 style={{color: 'white'}}>this is the footer</h3>

        </div>
    );
}

export default Footer;