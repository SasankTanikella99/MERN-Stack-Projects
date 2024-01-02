import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const enqueueSnackbar = useSnackbar();
    const {id} = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:7777/books/${id}`)
            .then(()=>{
                setLoading(false)
                enqueueSnackbar('Book Deleted Successfully', {variant: 'success'})
                navigate('/')
                })
            .catch((error) => {
                setLoading(false);
                //alert('An error happened. Please check console ');
                enqueueSnackbar("Error deleting book", { variant: "error" });
                console.log(error);
            })    
    }
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'> Delete Book</h1>
        {loading ? <Spinner /> : ' '}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded -x1 w-[600px] p-8 mx-auto'>
           <h3 className='text-2xl'> Are you sure you want to delete this book ?</h3>

           <button
            className='w-full p-4 m-8 text-white bg-red-600'
            onClick={handleDeleteBook}
            >
                Yes, Delete it
            </button> 

        </div>
      
    </div>
  )
}

export default DeleteBooks
