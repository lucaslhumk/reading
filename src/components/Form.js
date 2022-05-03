import thumbnail from '../images/thumbnail.jpg'

export const Form = ({handleSubmit, chosen}) => {
    return (
        <form id="cadastro" onSubmit={handleSubmit}>
            <input type="hidden" name="paginas" value={chosen.pageCount?chosen.pageCount:"Não informado"} />
            <div className="form-group row">
                <div className="col-auto mb-4">
                    <img src={chosen.imageLinks&&chosen.imageLinks.thumbnail !== '' ? chosen.imageLinks.thumbnail : thumbnail} alt={chosen.title} />
                    <input type="hidden" name="thumbnail" value={chosen.imageLinks&&chosen.imageLinks.thumbnail !== '' ? chosen.imageLinks.thumbnail : ''} />
                </div>

                <div className="col-lg-6">
                    <h6>{chosen.title}</h6>
                    <input type="hidden" name="titulo" value={chosen.title} />

                    <p>{chosen.authors?.join(", ") ? chosen.authors?.join(", ") : "Autor não informado"}</p>
                    <input type="hidden" name="autor" value={chosen.authors?.join(", ") ? chosen.authors?.join(", ") : "Autor não informado"} />                                                                

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
                            <input className="rating__input rating__input--none" name="nota" id="rating3-none" value="0" type="radio" />
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
    )
}