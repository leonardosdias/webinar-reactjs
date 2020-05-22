import React, { useState } from 'react';

import Modal from '../components/Modal/Modal';

function Home() {

    const [nomeContact, setNomeContact] = useState('');
    const [telefoneContact, setTelefoneContact] = useState('');
    const [emailContact, setEmailContact] = useState('');

    function loadContact(nome, telefone, email) {
        setNomeContact(nome);
        setTelefoneContact(telefone);
        setEmailContact(email)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">Pesquisar</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Cargo e Departamento</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Leonardo</td>
                                <td>leonardodias96@outlook.com</td>
                                <td>(61) 9 8334-6296</td>
                                <td>Analista/Tecnologia</td>
                                <td>
                                    <button
                                        type="button"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        onClick={() => loadContact('Leonardo', '(61) 9 8334-6296', 'leonardodias96@outlook.com')}
                                        className="btn btn-primary"
                                    >
                                        Detalhes
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                nome={nomeContact}
                telefone={telefoneContact}
                email={emailContact}
            />
        </div>
    )
}

export default Home;