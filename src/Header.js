import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" className="header__logo" />
            <div className="header__search">
                <input 
                    className="header__searchInput" type="text"
                    
                    />
                {/* LOGO */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sachitha</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sachitha</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sachitha</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sachitha</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </div>

        </div>
    )
}

export default Header
