import React from 'react';
import {Button} from "../Button";

function Home(props) {
    return (
        <div>
            <h1 style={{color:'white'}}>This is the home page</h1>
            <Button 
            color={'linear-gradient(45deg, blue, red)'} 
            text={'this is a button'} 
            onClick={console.log('hi')} 
        />
        </div>
    );
}

export default Home;