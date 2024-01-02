import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBooks = () => {
    const [book,setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:7777/books/${id}`)
        .then((response) => {
            setBook(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log('Error:', error);
            setLoading(false);
        });  
    }, [])
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'> Show Books</h1>
        {loading ? (
            <Spinner/>
        ) : (
            <div className='flex flex-col p-4 border-2 vorder-sky-400 rounded-x1 w-fit'>
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Id</span>
                    <span>{book.id}</span>
                </div>
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Title</span>
                    <span>{book.title}</span>
                </div> 
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Author</span>
                    <span>{book.author}</span>           
                </div>
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Publish Year</span>
                    <span>{book.publishedYear}</span>   
                </div>
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Create Time</span>
                    <span>{new Date(book.createdAt).toString()}</span>  
                </div>
                <div className='my-4'>
                    <span className='mr-4 text-xl text-gray-500'> Last Update Time</span>
                    <span>{new Date(book.updatedAt).toString()}</span>  
                </div>         
            </div>
        )}
    </div>
  )
}

export default ShowBooks
