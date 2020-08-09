import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    open: boolean;
    toggle: (open: boolean) => void;
}
export default function Menu(props: Props) {
    return (
        <div
            id="menu-responsive"
            className={'d-block d-md-none ' + (props?.open ? 'menu-responsive-enable' : 'menu-responsive-disable')}
            onClick={(): void => {
                return props.toggle(false);
            }}>
            <div id="menu-responsive-section">
                <NavLink to="/" className="font" activeClassName="link-selected" exact>
                    <i className="fa fa-home" />
                    Home
                </NavLink>
                <NavLink to="/briefcase" className="font" activeClassName="link-selected" exact>
                    <i className="fa fa-network-wired" />
                    Portafolio
                </NavLink>
                <NavLink to="/courses" className="font" activeClassName="link-selected" exact>
                    <i className="fa fa-trophy" />
                    Cursos
                </NavLink>
                <NavLink to="/about" className="font" activeClassName="link-selected" exact>
                    <i className="fa fa-user" />
                    Sobre mi
                </NavLink>
            </div>
        </div>
    );
}
