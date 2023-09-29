import React from 'react'
import "./DrawerMenu.css"


// Custom component

import {Sidebar, Menu, MenuItem, sidebarClasses, SubMenu} from "react-pro-sidebar"

import { HiFolder, HiHome, HiMenu, HiX,
         HiCog, HiPhotograph, HiAdjustments,
         HiSun, HiMoon,
         HiUser, HiIdentification, HiUserRemove, HiUserAdd
        } from "react-icons/hi"
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

export const DrawerMenu = ({isDrawerOpen, toggleDrawer}) => {

    const menuItemStyles = {
        button: {
            borderRadius: "8px",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          [`&.active`]: {
            backgroundColor: '#0F4C75',
            color: '#D6E6F2'
          },
        },
    }

    // For future authentication context
    const isUserAuth = false;

    const loginout = isUserAuth 
    ?
    <MenuItem icon={<HiUserRemove />}> Log out </MenuItem>
    :
    <MenuItem icon={<HiUserAdd />}> Log in </MenuItem>

    
    return (
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`] : {
                    background: "#FFFFFF",
                    fontSize: "1.15em",
                    fontWeight: "400",
                    userSelect: "none"
                },
            }}
            onBackdropClick={toggleDrawer}
            collapsed={!isDrawerOpen}
        >
            <Menu
                menuItemStyles={menuItemStyles}
            >
                <MenuItem 
                icon={ isDrawerOpen ? <HiX /> : <HiMenu />} 
                onClick={() => toggleDrawer()} 
                style={{textAlign: "start", marginBottom: "10px", borderBottom: "1px solid #efefef"}}
                >
                    <Logo />
                </MenuItem>
                <MenuItem component={<NavLink to={"/"} />} icon={<HiHome />}> Main </MenuItem>
                <MenuItem component={<NavLink to={"/groups"} />} icon={<HiFolder />}> Groups </MenuItem>
                <SubMenu icon={<HiCog />} label="Preferences">
                    <SubMenu icon={<HiPhotograph />} label="Theme" >  
                        <MenuItem icon={<HiSun />} > Light </MenuItem>
                        <MenuItem icon={<HiMoon />} > Dark </MenuItem>
                    </SubMenu>
                    <MenuItem component={<NavLink to={"/controls"} />} icon={<HiAdjustments />}> Controls </MenuItem>
                </SubMenu>
                <SubMenu icon={<HiUser />} label="User">
                    {isUserAuth && <MenuItem component={<NavLink to={"/profile"} />} icon={<HiIdentification />} > Your Profile </MenuItem>}
                    {loginout}
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}