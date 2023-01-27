import React, { useState } from 'react'
import UnitBook from './UnitBook'

const Books = () => {

    const [books] = useState([
        {
            id: 1,
            category: 'action',
            title: 'Titanic',
            author: 'Winfred',
        },
        {
            id: 2,
            category: 'action',
            title: 'Titanic',
            author: 'Winnie',
        },
        {
            id: 3,
            category: 'action',
            title: 'tanic',
            author: 'Winfred',
        },
        {
            id: 4,
            category: 'action',
            title: 'Titan',
            author: 'Winfred',
        },
    ])
  return (
    <ul>
        {books.map((book)=>(
            <UnitBook key={book.id} id={book.id} book={book} />
        ))}
    </ul>
  )
}

export default Books
