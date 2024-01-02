import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutLineEdit } from 'react-router-dom';
import { BsInfoCircle } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-router-dom'
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:7777/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error", error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-center items-xenter gap-x-4'>
                <button
                    className='px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600'
                    onClick={() => setShowType('table')}>

                    Table
                </button>
                <button
                    className='px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600'
                    onClick={() => setShowType('card')}>

                    Card
                </button>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='my-8 text-3xl'>Book List</h1>
                <Link to='books/create'>
                    <MdOutlineAddBox className='text-4xl text-sky-800' />
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />): (<BooksCard books = {books} />)}
        </div>
    )
}

export default Home
