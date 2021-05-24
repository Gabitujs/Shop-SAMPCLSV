import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { LoginMenu } from './api-authorization/LoginMenu';
import authService from './api-authorization/AuthorizeService'

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean, isAuth: boolean }> {
    public state = {
        isOpen: false,
        isAuth: false
    };

    componentDidMount() {
        authService.isAuthenticated().then(result => this.setState({
            isAuth: result
        }));

    }

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-transparent mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Shop-SA:MP</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                
                                {this.state.isAuth && <> <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Auctions">Buy Account</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Create">Sell Account</NavLink>
                                </NavItem>
                                 </> 
                                }
                                <LoginMenu/>
                            </ul>
                            
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
