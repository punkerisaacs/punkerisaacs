import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from '../index';
import './header.css';

export default function Header(): JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Menu open={open} toggle={setOpen} />
            <div className="row" id="header">
                <div className="col-12 col-sm-6 font-sub" id="title">
                    <Link
                        to="/"
                        onClick={(): void => {
                            return setOpen(false);
                        }}>
                        Isaac Lopez
                    </Link>
                </div>
                <div id="links" className="col-12 col-sm-6">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://github.com/punkerisaacs" target="_blank">
                        <i className="fab fa-github" />
                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://www.facebook.com/punkerisaacs" target="_blank">
                        <i className="fab fa-facebook" />
                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://www.youtube.com/channel/UCqHiqA4EhfN5Xka5ORIxXdQ" target="_blank">
                        <i className="fab fa-youtube" />
                    </a>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://linkedin.com/in/isaaclopezmedina" target="_blank">
                        <i className="fab fa-linkedin" />
                    </a>
                    <i
                        className="fas fa-bars d-block d-md-none"
                        id="menu"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                </div>

                <div className="row d-none d-md-block" id="nav-bar">
                    <div className="col-12" id="nav-bar-link">
                        <NavLink to="/" className="font link-icon" activeClassName="link-selected" exact>
                            <i className="fa fa-home" />
                            Home
                        </NavLink>
                        <NavLink to="/briefcase" className="font link-icon" activeClassName="link-selected" exact>
                            <i className="fa fa-network-wired" />
                            Portafolio
                        </NavLink>
                        <NavLink to="/courses" className="font link-icon" activeClassName="link-selected" exact>
                            <i className="fa fa-trophy" />
                            Cursos
                        </NavLink>
                        <NavLink to="/about" className="font link-icon" activeClassName="link-selected" exact>
                            <i className="fa fa-user" />
                            Sobre mi
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* <div id="header-container">
                <div id="header">
                    <div
                        className="row"
                        style={{
                            textAlign: 'center',
                            padding: 10,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <h3 className="col-12 text-color font-sub">Ricardo Isaac Lopez Medina</h3>
                        <h5 className="col-12 text-color font">Desarrollador FullStack</h5>
                        <h5 className="col-12 text-color font">Web / Móvil</h5>

                        <h6 className="col-12 text-color font">
                            <i className="far fa-envelope" />
                            isaaclopezmedina@hotmail.com
                        </h6>
                        <h5 className="col-12 text-color font">
                            <i className="fa fa-phone" />
                            7714276066
                        </h5>
                        <h5 className="col-12 text-color font">
                            <i className="fa fa-globe-europe" />
                            Pachuca, Hgo
                        </h5>
                    </div>
                </div>
            </div>*/}
        </React.Fragment>
    );
}
