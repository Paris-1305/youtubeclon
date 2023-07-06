import './App.css' ;
import {Routes, Route} from 'react-router-dom'
import Application from './Application'
import Home from './pages/home'
import Library from './pages/library'
export default function App(){
    return( 
         <Routes>
             <Route exact path='/' element={<Application/>}/> 
            <Route path='/home' element={<Home/>}/>
            <Route path='/library' element={<Library/>}/>
        </Routes>
    )
}