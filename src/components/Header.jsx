import React from "react";

import "./Header.css"


// Custom components
import { Fade as HamburgerIcon } from "hamburger-react"
import { HiMenu } from "react-icons/hi";


export const Header = ({isDrawerOpen, toggleDrawer}) => {
    return (
        <header className="mainheader">
            <div className="mainheader-left">
                <div className="icon-container">
                    <HiMenu />
                </div>
            </div>
            <div className="mainheader-center"></div>
            <div className="mainheader-right"></div>
        </header>
    )
}