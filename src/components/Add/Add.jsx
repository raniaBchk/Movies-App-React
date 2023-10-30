import React,{useState,useEffect} from 'react'
import style from './add.module.css'
import Header from '../Header/Header'
import axios from 'axios'
import ResultCard from '../ResultCard/ResultCard'
import shortid from 'shortid'
import { useMovieContext } from '../context/GlobalContext'

const Add = () => {

  const {MoviesDispatch}=useMovieContext();
   // search method
  const [searchValue, setSearchValue]=useState('')
  const [movies,setMovies]=useState([])
 

  useEffect (()=>{
  
        axios.get(`https://www.omdbapi.com/?t=${searchValue}&apikey=da90f3dd`)
        .then((response)=>{
            if(response.data){
                setMovies([response.data])
                console.log(response.data)
            }
        })
        .catch((error)=>{
            console.error('Erreur lors de la requête:', error);
        })
          
   
  },[searchValue]);


  return (
    <div>
    <Header/>
    <div className={style.addPage}>
    <div className={style.container}>
      <div className={style.addContent}>
        <div className={style.inputWrapper}>
          <input
           type="text"
           placeholder='Search for a movie' 
           onChange={(e) => setSearchValue(e.target.value)}
           
           />

           


       </div>
        

          

              
              { movies.length>0 && searchValue!=='' && (
                <ul className={style.results}>
                 { movies.map((movie)=>(
              
                <li key={movie.imdbID}  >
                    <ResultCard movie={movie}/>
                </li>
                 ))}
                </ul>
              )
            
            }
              
              
             

          
       
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default Add