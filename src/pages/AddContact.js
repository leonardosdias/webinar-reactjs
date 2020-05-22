import React from 'react';

import { Link } from "react-router-dom";

function AddContact() {
    return (
        <div>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="exampleInputNome">Nome</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="exampleInputNome">Email</label>
                            <input type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="exampleInputTelefone">Telefone</label>
                            <input type="text" className="form-control" id="phone" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="exampleInputNome">Departamento</label>
                            <input type="text" className="form-control" id="department" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <button type="submit" className="btn btn-primary">Salvar</button><br></br><br></br>
                        <Link to={'/'}>
                            <button type="submit" className="btn btn-danger">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContact;