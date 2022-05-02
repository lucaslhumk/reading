import axios from 'axios'
import thumbnail from '../images/thumbnail.jpg'
import { useState, useEffect } from 'react'

export function AdicionarLivro() {
    const [pesquisa, setPesquisa]   = useState('')
    const [resultado, setResultado] = useState([])
    const [escolhido, setEscolhido] = useState('')

    const onSearch = (pesquisa) => {
        setPesquisa(pesquisa)        
    }
    
    const onPick = (escolhido) => {
        setEscolhido(escolhido)
        setPesquisa('')
    }

    useEffect(() => {
        if(pesquisa.length > 0) {
            axios.get('https://www.googleapis.com/books/v1/volumes', {params: {q: pesquisa}})
            .then((response) => {
                setResultado(response.data.items)
                console.log(response.data.items)
            })
        }
    }, [pesquisa]);

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());

        console.log({ value });
    }

    const form = document.querySelector('form#cadastro');
    if (form !== null) {
        form.addEventListener('submit', handleSubmit);
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h5>Adicionar livro</h5>

                    <p>Informe o nome do livro</p>

                    <div className="search-form">
                        <input type="text" onChange={e => onSearch(e.target.value)} value={pesquisa} placeholder="Pesquisar o livro" className="form-control" />
                        <ul className={pesquisa.length > 0 ? 'search-dropdown form-control' : 'd-none'}>
                            {
                                resultado?.map((item, i) => {
                                    return pesquisa.length > 0 ?
                                        <li key={i} onClick={e => onPick(item.volumeInfo)}>
                                            <div className="thumb">
                                                <img src={item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.smallThumbnail !== '' ? item.volumeInfo.imageLinks.smallThumbnail : thumbnail} alt={item.volumeInfo.title} />
                                            </div>
                                            
                                            <div>
                                                <p className='title'>{item.volumeInfo.title}</p> 
                                                <p className='author'>{item.volumeInfo.authors?.join(", ") ? item.volumeInfo.authors?.join(", ") : "Autor não informado"}</p> 
                                                <p className='year'>{item.volumeInfo.publishedDate?.substring(0, 4) ? item.volumeInfo.publishedDate?.substring(0, 4) : "Ano não informado"}</p>
                                            </div>

                                            <hr />                                          
                                        </li>
                                    : null
                                })
                            }
                        </ul>
                    </div>                    
                </div>
            </div>

            <div className={escolhido ? 'row mt-5' : 'd-none'}>
                <form id="cadastro" action='/'>
                    <input type="hidden" name="id" value={escolhido.title} />
                    <div className="form-group row">
                        <div className="col-auto mb-4">
                            <img src={escolhido.imageLinks&&escolhido.imageLinks.thumbnail !== '' ? escolhido.imageLinks.thumbnail : thumbnail} alt={escolhido.title} />
                            <input type="hidden" name="thumbnail" value={escolhido.imageLinks&&escolhido.imageLinks.thumbnail !== '' ? escolhido.imageLinks.thumbnail : ''} />
                        </div>

                        <div className="col-lg-6">
                            <h6>{escolhido.title}</h6>
                            <input type="hidden" name="titulo" value={escolhido.title} />

                            <p>{escolhido.authors?.join(", ") ? escolhido.authors?.join(", ") : "Autor não informado"}</p>
                            <input type="hidden" name="autor" value={escolhido.authors?.join(", ") ? escolhido.authors?.join(", ") : "Autor não informado"} />                                                                

                            <div className="row align-items-center mb-3">
                                <div className="col">Comecei a ler:</div>
                                <div className="col"><input type="date" name="inicio" className='form-control' /></div>
                            </div>

                            <div className="row align-items-center mb-3">
                                <div className="col">Terminei de ler:</div>
                                <div className="col"><input type="date" name="termino" className='form-control' /></div>
                            </div>

                            <p><strong>Sua avaliação</strong></p>
                            <div className="full-stars-example-two">
                                <div className="rating-group">
                                    <input disabled checked className="rating__input rating__input--none" name="nota" id="rating3-none" value="0" type="radio" />
                                    <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                                    <input className="rating__input" name="nota" id="rating3-1" value="1" type="radio" />
                                    <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                                    <input className="rating__input" name="nota" id="rating3-2" value="2" type="radio" />
                                    <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                                    <input className="rating__input" name="nota" id="rating3-3" value="3" type="radio" />
                                    <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                                    <input className="rating__input" name="nota" id="rating3-4" value="4" type="radio" />
                                    <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                                    <input className="rating__input" name="nota" id="rating3-5" value="5" type="radio" />
                                </div>
                            </div>

                            <h6>Escreva uma resenha</h6>
                            <textarea name="avaliacao" cols="60" rows="5" placeholder="Escrever" className='form-control mb-3'></textarea>

                            <button type="submit" className='btn-off cadastrar'>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}