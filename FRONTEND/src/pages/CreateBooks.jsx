import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishedYear,
        };
        setLoading(true);
        axios
            .put('http://localhost:7777/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created Successfully', {variant : 'success'} );
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                //alert('An error occured. Please check the console');
                enqueueSnackbar('Error Creating Book',{ variant:'error'});
                console.log(error);
            });
    }
    
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Create Books</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Title</label>
                <input
                    type = 'text'
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    className = 'w-full px-4 py-2 border-2 border-gray-500'
                />     
            </div>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Author</label>
                <input
                    type = 'text'
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                    className = 'w-full px-4 py-2 border-2 border-gray-500'
                />     
            </div>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>published Year</label>
                <input
                    type = 'text'
                    value = {publishedYear}
                    onChange = {(e) => setPublishedYear(e.target.value)}
                    className = 'w-full px-4 py-2 border-2 border-gray-500'
                />     
            </div>
            <button className='p-2 m-8 bg-sky-300' onClick={handleSaveBook}>
            Save
            </button>
        </div>    
    </div>
  )
}

export default CreateBooks
