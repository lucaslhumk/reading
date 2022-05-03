import { useEffect } from 'react';
import { Link } from "react-router-dom"
import { apiLocal } from '../services/api.js'
import thumbnail from '../images/thumbnail.jpg'
import { useGetBooks } from '../hooks/useGetBooks.js'

export function MyBooks() {
    // Listagem dos meus livros
    const {getBooks, books} = useGetBooks();

    useEffect(() => {
        getBooks()
    }, []);
    
    const removeBook = async (id) => {
        try {
            const result = await apiLocal.delete(`/MyBooks/${id}`)          
            getBooks()
        } catch(error) {
            console.log(error)
        }        
    }

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
                            books?.map((book, i) => {
                                return <div key={i} className="row livroContent">
                                    <div className="col-auto">
                                        <img src={book.thumbnail?book.thumbnail:thumbnail} alt={book.titulo} />
                                    </div>

                                    <div className="col">
                                        <h6>{book.titulo}</h6>
                                        <p className='autor'>{book.autor}</p>
                                        <p className='paginas'>Páginas: {book.paginas}</p>
                                        <p className={"nota star_" + book.nota}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                        <p className='dia'>Você começou a ler: <span>{book.inicio}</span></p>
                                        <p className='dia'>Você terminou de ler: <span>{book.termino}</span></p>
                                        <p className='avaliacao'>{book.avaliacao}</p>

                                        <button className="btn-off remover" onClick={(e) => removeBook(book.id)}>Remover livro</button>
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