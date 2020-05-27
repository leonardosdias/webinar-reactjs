import React from 'react';

import { Link } from "react-router-dom";

function AddContact() {
    return (
        <div className="container col-md-8">
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="department">Departamento</label>
                        <input type="text" className="form-control" id="department" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-success">Salvar</button>
                    </div>
                    <div className="col-md-6">
                        <Link to={'/'}>
                            <button type="submit" className="btn btn-danger">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddContact;