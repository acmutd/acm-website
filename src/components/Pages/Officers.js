import React from 'react';
import '../Pages/Style.css';

// function Officers(props) {
//     return (
//         <div>
//             <h1 style={{color:'white'}}>This is the officers page</h1>
//         </div>
//     );
// }

function Officers(props) {
    return (
        <div class="wrapper">
        <div style={{backgroundColor:'white', position:'relative', zIndex:1}}>hi</div>
        <div style={{backgroundColor:'green', position:'absolute', zIndex:2}}>hi</div>
        <div style={{backgroundColor:'blue', position:'absolute', zIndex:1}}>hi</div>
      </div>
    );
}




export default Officers;