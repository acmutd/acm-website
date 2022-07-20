import React from 'react';
// import {Button} from "../../Button/Button.js";

import {Button} from '../../Button/Button';

// import discordWhite from '../../assets/socialMedia/discordWhite.png';

import discordWhite from '../../../assets/socialMedia/discordWhite.png';

function Home(props) {
    return (
        <div>
            <h1 style={{color:'white'}}>This is the home page</h1>
            {/* <Button 
            color1={'#FF005C'}
            color2={'#4004C0'}
            children={<img src={discordWhite} style={{maxWidth:30}}></img>} 
            onClick={alert("button has been clicked")} 
            size={'xlarge'}
        /> */}
        </div>
    );
}

export default Home;