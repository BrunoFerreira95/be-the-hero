<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

>>>>>>> 855a75727a6e42e5335c732765a33b0e11165862
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
<<<<<<< HEAD
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

=======
>>>>>>> 855a75727a6e42e5335c732765a33b0e11165862
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Votar para home
                    </Link>
                </section>

<<<<<<< HEAD
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Títudo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}    
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}    
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}    
                    />
=======
                <form>
                    <input placeholder="Títudo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
>>>>>>> 855a75727a6e42e5335c732765a33b0e11165862
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}