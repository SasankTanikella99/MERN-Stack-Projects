import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutLineEdit} from 'react-router-dom';
import {BsInfoCircle} from 'react-router-dom';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-router-dom'

const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className= 'border rounded-md border-slate-600'>No</th>
                        <th className= 'border rounded-md border-slate-600'>Title</th>
                        <th className= 'border rounded-md border-slate-600 max-md:hidden'> Author</th>
                        <th className= 'border rounded-md border-slate-600 max-md:hidden'> Published Year</th>
                        <th className= 'border rounded-md border-slate-600'> Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) =>(
                        <tr key = {book._id} className = 'h-8'>
                            <td className='text-center border rounded-md border-slate-700'> {index + 1} </td>
                            <td className='text-center border rounded-md border-slate-700'> {book.title} </td>
                            <td className='text-center border rounded-md border-slate-700 max-md:hidden'> {book.author} </td>
                            <td className='text-center border rounded-md border-slate-700'> {book.publishedYear} </td>
                            <td className='text-center border rounded-md border-slate-700'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to = {`/books/details/${book._id}`}>
                                        <BsInfoCircle className = 'text-2xl text-green-800' />
                                    </Link>
                                    <Link to = {`/books/edit/${book._id}`}>
                                        <AiOutLineEdit className = 'text-2xl text-yellow-600' />
                                    </Link>
                                    <Link to = {`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className = 'text-2xl text-red-600' />
                                    </Link>       
                                </div> 
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
  )
}

export default BooksTable
