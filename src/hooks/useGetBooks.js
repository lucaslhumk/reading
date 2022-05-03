import { useState } from 'react'
import { apiLocal } from '../services/api.js'

export const useGetBooks = () => {
    const [books, setBooks] = useState([])

    const getBooks = () => {
        apiLocal.get('/MyBooks').then((response) => {
            setBooks(response.data)
        })
    }

    return { getBooks, books }
}