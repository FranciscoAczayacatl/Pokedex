import { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  
  return (

    <HashRouter>
       <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={<Pokedex/>}/>
              <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
            </Route>
            
        </Routes>
      </div>
    </HashRouter>
   
  )
}

export default App
