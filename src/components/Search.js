import { useState, useRef } from 'react'
import axios from 'axios'
import thumbnail from '../images/thumbnail.jpg'
import { API_GOOGLE } from '../constants/index.js'

export const Search = ({onPick}) => {
    const [search, setSearch]   = useState('')
    const [result, setResult] = useState([])

    const handlePick = (chosenBook) => {
        setSearch('')
        onPick(chosenBook)
    }

    const onSearch = (search) => {
        setSearch(search) 

        if(search.length > 0) {
            axios.get(API_GOOGLE, {params: {q: search}})
            .then((response) => {
                setResult(response.data.items)
            })
        }        
    }

    return (
        <div className="search-form">
            <input type="text" onChange={e => onSearch(e.target.value)} value={search} placeholder="Pesquisar o livro" className="form-control" />
            {search.length > 0 && (
                <ul className="search-dropdown form-control">
                    {
                        result?.map((item, i) => (
                            <li key={i} onClick={e => handlePick(item.volumeInfo)}>
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
                        ))
                    }
                </ul>
            )}
        </div>
    )
} 