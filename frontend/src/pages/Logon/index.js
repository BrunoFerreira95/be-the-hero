<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
>>>>>>> 855a75727a6e42e5335c732765a33b0e11165862

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

<<<<<<< HEAD
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
=======
                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
>>>>>>> 855a75727a6e42e5335c732765a33b0e11165862
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}