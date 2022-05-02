import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { apiLocal } from '../services/api.js'
import thumbnail from '../images/thumbnail.jpg'

export function MeusLivros() {
    // Listagem dos meus livros
    const [meusLivros, setMeusLivros] = useState([]);

    useEffect(() => {
        apiLocal.get('/meusLivros').then((response) => {
            setMeusLivros(response.data)
            console.log(response.data)
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-auto">
                    <Link className="btn-add" title="Adicionar livro" to="/adicionar-livro">Adicionar livro</Link>
                </div>

                <div className="col">
                    <div className="tab-content">
                        <ul className="tab">
                            <li>Lendo atualmente</li>
                        </ul>

                        {
                            meusLivros?.map((meuLivro, i) => {
                                return <div key={i} className="row livroContent">
                                    <div className="col-auto">
                                        <img src={meuLivro.thumbnail?meuLivro.thumbnail:thumbnail} alt={meuLivro.titulo} />
                                    </div>

                                    <div className="col">
                                        <h6>{meuLivro.titulo}</h6>
                                        <p className='autor'>{meuLivro.autor}</p>
                                        <p className='paginas'>{meuLivro.paginas} páginas</p>
                                        <p className={"nota star_" + meuLivro.nota}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                        <p className='dia'>Você começou a ler: <span>{meuLivro.inicio}</span></p>
                                        <p className='dia'>Você terminou de ler: <span>{meuLivro.termino}</span></p>
                                        <p className='avaliacao'>{meuLivro.avaliacao}</p>

                                        <button className="btn-off remover">Remover livro</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}