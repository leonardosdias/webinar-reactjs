import React from 'react';

import { Link } from "react-router-dom";

function AddContact() {
    return (
        <div>
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="exampleInputNome">Nome</label>
                        <input type="text" class="form-control" id="exampleInputNome" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputTelefone">Telefone</label>
                        <input type="text" class="form-control" id="exampleInputTelefone" />
                    </div>
                    <div class="form-group form-check">
                        <button type="submit" class="btn btn-primary">Salvar</button><br></br><br></br>
                        <Link to={'/'}>
                            <button type="submit" class="btn btn-danger">
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