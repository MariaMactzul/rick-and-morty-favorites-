import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import FavoritesPage from './components/FavoritesPage'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
