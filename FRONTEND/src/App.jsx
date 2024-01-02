import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ShowBooks from './pages/ShowBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBooks from './pages/EditBooks'
import CreateBooks from './pages/CreateBooks'


const App = () => {
  // for each Route, we need a path and element
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/books/create' element = {<CreateBooks />} />
      <Route path = '/books/details/:id' element = {<ShowBooks />} />
      <Route path = '/books/edit/:id' element = {<EditBooks />} />
      <Route path = '/books/delete/:id' element = {<DeleteBooks />} />
    </Routes>

  )
}

export default App