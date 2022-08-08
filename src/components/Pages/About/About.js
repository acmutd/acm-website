import React from 'react';
import aboutImage1 from '../../../assets/aboutImage1.png';
import projects from "../../../assets/projects.png"
import dev from "../../../assets/dev.png"
import diversity from "../../../assets/diversity.png"
import industry from "../../../assets/industry.png"
import media from "../../../assets/media.png"
import research from "../../../assets/research.png"
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
                <div className='item1' >
                {/* <img classname="pic item1" src={projects}></img> */}

                </div>
                <div className='item1' >
                {/* <h3>1</h3> */}

                </div>
                <div className='item1' >
                

                </div>
                <div className='item1' >
                

                </div>
                <div className='item1' >
                

                </div>
                <div className='item1' >
                

                </div>
                <div className='item1' >
                

                </div>
                <div className='item1' >
                

                </div>

                {/* <div className='item1' >
                <h3>9</h3>
                

                </div>
                <div className='item1' >
                <h3>10</h3>

                </div>
                <div className='item1' >
                <h3>11</h3>

                </div>
                <div className='item1' >
                <h3>12</h3>

                </div>
                <div className='item1' >
                <h3>13</h3>

                </div>
                <div className='item1' >
                <h3>14</h3>

                </div>
                <div className='item1' >
                <h3>15</h3>

                </div>
                <div className='item1' >
                <h3>16</h3>

                </div>
                <div className='item1' >
                <h3>17</h3>

                </div>
                <div className='item1' >
                <h3>18</h3>

                </div>
                */}
               
               

            </div>





        </div>
    );
}

export default About;