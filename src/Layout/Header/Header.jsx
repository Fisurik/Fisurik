import React from "react";
import HeaderSearch from "./HeaderSearch";

import {IoIosNotifications} from 'react-icons/io'
import { Avatar } from '@mui/material';


const Header = () => {
    return ( 
    <header className="header">
         <div className="container">
            <nav className="header__nav">
                <div className="header__left">
                    <h1 className="header__title">Fisurik Web</h1>
                    <HeaderSearch/>
                </div>
                <div className="header__right">
                    <span className="header__notif"><IoIosNotifications/></span>
                    <span className="header__user"><Avatar>H</Avatar></span>
                </div>
            </nav>
         </div>
    </header> );
}
 
export default Header;