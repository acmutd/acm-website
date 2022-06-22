import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import {FaBars, FaReact, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/acm-chapter-logo.png';


//function Navbar(props)
class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className="navbar-logo">
                    <img className='acm-logo'src={logo}/>
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
            
                    {this.state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
    
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;