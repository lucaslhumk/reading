import { useState } from 'react'
import { API_DB } from '../constants/index.js'

export const useGetBooks = () => {
    const [books, setBooks] = useState([])

    const getBooks = () => {
        API_DB.get('/MyBooks').then((response) => {
            setBooks(response.data)
        })
    }

    return { getBooks, books }
}