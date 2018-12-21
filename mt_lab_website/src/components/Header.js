import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <img src="images/logo.png" alt={"HTML5 Icon"} style={{width: 128, height:128}}/>
                 </Link>
                 <h1>MT Lab</h1>
            </div>
        </div>
    </header>
);

export default Header;