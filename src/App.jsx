import { useState, lazy, Suspense } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'

const National = lazy(() => import('./pages/National.jsx'))
const Regions = lazy(() => import('./pages/Regions.jsx'))
const Type = lazy(() => import('./pages/Type.jsx'))
const Community = lazy(() => import('./pages/Community.jsx'))
const Legendary = lazy(() => import('./pages/Legendary.jsx'))
const Daily = lazy(() => import('./pages/Daily.jsx'))
 

function App() {


  return (
    <div className="app">
      <Router>
      <Sidebar/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<National/>}/>
          <Route path="/regions" element={<Regions/>}/>
          <Route path="/daily" element={<Daily />}/>
          <Route path="/legendaries" element={<Legendary/>}/>
          <Route path="/types" element={<Type/>}/>
          <Route path="/community" element={<Community/>}/>
          {/* <Route path="/pokemon" element={<Pokemon/>}/> */}
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
