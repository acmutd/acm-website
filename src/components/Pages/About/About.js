import React from 'react';
import aboutImage1 from '../../../assets/aboutImage1.png';
import '../About/About.css';
import '../Style.css';
import projectLogoWords from '../../../assets/projects-logo-words-white.png';

function About(props) {
    return (
        <div>
            <div className='headerContainer'>
                <img className='headerPhoto' src={aboutImage1}></img>

                <div className='textContainer'>

                    <div className='headingContainer'>
                        <h1 className='header' style={{ lineHeight: '1.2' }}>we're just a group of people</h1>
                    </div>

                    <div className='subheadingContainer'>
                        <h2 className='subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h2>
                    </div>
                </div>
            </div>

            <div className='divisionText'>

                <h1 className='header' style={{ textAlign: 'center', marginTop: '7%' }}>Divisions</h1>

                <h2 className='subheading-two' style={{ textAlign: 'center', width: '50%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h2>
            </div>

            <div className='divisionGrid'>
                <div className='item1' style={{backgroundColor:'red'}}>
                    <h3>1</h3>
                    {/* <img className='logo' src={projectLogoWords} style={{backgroundColor:'red'}}></img> */}
                </div>

            </div>




        </div>
    );
}

export default About;