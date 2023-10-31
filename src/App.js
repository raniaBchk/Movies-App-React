import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Watched from './components/Watched/Watched';
import Watchlist from './components/Watchlist/Watchlist';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import  ContextProvider  from './components/context/GlobalContext';



function App() {
  
  const [movies,setMovies]=useState([])

 

    // const getMovie=async (title)=>{
    //   try {
    //   const res=await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=da90f3dd`)
    //   setMovies([res.data])
   
    //   console.log(res.data)
    //   }catch(error){
    //     console.error('Erreur lors de la requête:', error);
    //   }
   
    
    
    //   }

 

 
  return (
    <div>
    <ContextProvider>
    <BrowserRouter basename="/Movies-App-React">
   
    <Routes>
  
      <Route path='/' element={ <Header/>} />
      <Route path='/add' element={ <Add  movies={movies}/>}/>
      <Route path='/watchlist' element={ <Watchlist/>}/>
      <Route path='/watched' element={ <Watched/>}/>
     
    </Routes>
 
    </BrowserRouter> 
    </ContextProvider>
    </div>
  );
}

export default App;
