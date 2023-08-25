import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

function NavMenu() {
    const [ collapsed, setCollapsed ] = useState(true);

    function toggleNavbar() {
        setCollapsed(!collapsed);
    }

    return (
        <header>
            <Navbar id="navbar" className="navbar-expand-sm navbar-toggleable-sm bg-dark border-bottom box-shadow mb-3" container dark>
                <NavbarBrand tag={Link} to="/">React Test</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" dark="true" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/fetch-data">Fetch data</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default NavMenu;