import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Webinar ReactJS</div>
            <div className="list-group list-group-flush">
                <Link to={"/"} className="list-group-item list-group-item-action bg-light">
                    Inicio
                </Link>
                <Link to={"/add"} className="list-group-item list-group-item-action bg-light">
                    Novo Contato
                </Link>
                <Link to={"/contacts"} className="list-group-item list-group-item-action bg-light">
                    Listar Contatos
                </Link>
            </div>
        </div>
    )
}

export default SideBar;