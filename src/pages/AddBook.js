import { useState } from 'react'
import { API_DB } from '../constants/index.js'
import { Search } from '../components/Search.js'
import { Form } from '../components/Form.js'
import { useNavigate } from 'react-router-dom'

export function AddBook() {
    const [chosen, setEscolhido] = useState('')

    const navigate = useNavigate();

    const onPick = (chosen) => {
        setEscolhido(chosen)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());

        try {
            await API_DB.post('/MyBooks', value)
            navigate("/");
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h5>Adicionar livro</h5>

                    <p>Informe o nome do livro</p>

                    <Search onPick={onPick} />
                </div>
            </div>

            <div className={chosen ? 'row mt-5' : 'd-none'}>
                <Form handleSubmit={handleSubmit} chosen={chosen} />
            </div>
        </div>
    );
}