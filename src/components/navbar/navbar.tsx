import React, { useState } from "react";

import { Outlet, NavLink, useRoutes, useParams } from "react-router-dom";

import { Button, Drawer } from "antd";
import { Menu } from "antd";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/logo.png";

import "./navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const hideDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="block sm:hidden">
        <div className="flex justify-between items-center mt-4">
          <a href="">
            <img src={logo} style={{ width: "10rem" }} />
          </a>
          <Button onClick={showDrawer}>
            <FaBars />
          </Button>
        </div>
        <Drawer title="Menu" placement="right" onClose={hideDrawer} open={open}>
          <Menu mode="vertical">
            <Menu.Item key="home" className="menu-item">
              <NavLink to="/" onClick={()=>{hideDrawer()}}>Home</NavLink>
            </Menu.Item>

            <Menu.Item key="courses">
              <NavLink to="/courses" onClick={()=>{hideDrawer()}}>Courses</NavLink>
            </Menu.Item>

            <Menu.Item key="gallery">
              <NavLink to="/gallery" onClick={()=>{hideDrawer()}}>Gallery</NavLink>
            </Menu.Item>

            <Menu.Item key="media-updates">
              <NavLink to="media-updates" onClick={()=>{hideDrawer()}}>Media Updates</NavLink>
            </Menu.Item>

            <Menu.Item key="contact">
              <NavLink to="contact" onClick={()=>{hideDrawer()}}>Contact</NavLink>
            </Menu.Item>

            <Menu.Item key="about" >
              <NavLink to="about" onClick={()=>{hideDrawer()}}>About</NavLink>
            </Menu.Item>

            <Menu.Item key="verify-certificate">
              <NavLink to="/verify-certificate" onClick={()=>{hideDrawer()}}>Verify Certificate</NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block flex items-center">
        <Menu mode="horizontal" className="flex items-center">
          <Menu.Item key="logo" disabled>
            <NavLink to="/">
              <img src={logo} style={{ width: "10rem" }} />
            </NavLink>
          </Menu.Item>

          <Menu.Item key="home" className="menu-item">
            <NavLink to="/" >Home</NavLink>
          </Menu.Item>

          <Menu.Item key="courses">
            <NavLink to="/courses">Courses</NavLink>
          </Menu.Item>

          <Menu.Item key="gallery">
            <NavLink to="/gallery">Gallery</NavLink>
          </Menu.Item>

          <Menu.Item key="media-updates">
            <NavLink to="media-updates">Media Updates</NavLink>
          </Menu.Item>

          <Menu.Item key="contact">
            <NavLink to="contact">Contact</NavLink>
          </Menu.Item>

          <Menu.Item key="about">
            <NavLink to="about">About</NavLink>
          </Menu.Item>

          <Menu.Item key="verify-certificate">
            <NavLink to="/verify-certificate">Verify Certificate</NavLink>
          </Menu.Item>
        </Menu>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
