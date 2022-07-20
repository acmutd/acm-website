import React from 'react';

import './Programs.css';
import './Test.js';

import Scrollbar from '../Scrollbar/Scrollbar';
import img1 from '../../assets/projects-photo1.png';
import projectsLogo1 from '../../assets/projects-logo-words-white.png';
import ProgramComponents, { Directors } from '../Pages/ProgramComponents';
import Test from './Test.js';


function Projects(props) {
    return (
        <div style={{position:'relative', zIndex: 0}}>
            <Scrollbar style={{position: 'absolute', zIndex: 10}}></Scrollbar>
            <div style={{backgroundColor:'green', height:50, width:50, position:'absolute', zIndex:1}}></div>
            <Test></Test>

            <div className='header-image-container' style={{position:'relative', zIndex: 2}}>
                <img src={img1} className='header-image'></img>
                <div className='header-image-caption'>
                    <h3 className='caption-text'>Projects Presentation Night</h3>
                    <h3 className='caption-text'>Shot Sunday, May 29, 2022 at 4:07 PM</h3>
                </div>
            </div>


            <div className='programs-format'>

                <div className='logo-container'>
                    <img src={projectsLogo1} className='logo-styling'></img>
                </div>

                <h2 className='body1' style={{width:'100%'}}>
                    ACM Projects is a semester-long guided projects initiative for those new to software development, teaching collaborative tools, new technologies, and core development principles complimentary to curriculum.
                </h2>

                <h3 style={{ color: 'white', fontWeight: 200 }}>button-filler for now</h3>

                <h2 className='subheading1'>meet the directors</h2>

                <Directors
                    name={'Saksham Sangrula'}
                    image={"officer-images/Saksham-Sangraula.png"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                ></Directors>

                <Directors
                    name={'Reshmi Ranjith'}
                    image={"officer-images/Reshmi-Ranjith.png"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                ></Directors>

                <h2 className='subheading1'>experience</h2>


            </div>











        </div>

    );
}

export default Projects;