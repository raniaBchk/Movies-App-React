import { React, useContext } from 'react'
import { useMovieContext } from '../context/GlobalContext'
import style from '../MovieCard/moviecard.module.css'
import * as actions from '../context/ActionTypes'



export const MovieControls = ({ movie,type }) => {

  const MovieContext=useMovieContext();
  return (
    
   
    <div className={style.innerCardControls}>

      { type ==="watchlist" && (

        <>
        <button className={style.ctrlBtn} 
        onClick={()=>
          MovieContext.MoviesDispatch({
          type: actions.ADD_MOVIE_TO_WATCHED, 
          payload: movie,
      })}
        
        >
        <i class="fa-solid fa-eye"></i>
        </button>


        <button className={style.ctrlBtn}  
        onClick={()=>
          MovieContext.MoviesDispatch({
          type: actions.REMOVE_MOVIE_FROM_WATCHLIST, 
          payload: movie,
      })}
        
        >
          <i className='fa-fw fa fa-times' />
        </button>
    </>
      )

      }
     
      {
        type==='watched' && (

          <>
          <button className={style.ctrlBtn}
          onClick={()=>
            MovieContext.MoviesDispatch({
            type: actions.MOVE_TO_WATCHLIST, 
            payload: movie,
        })}
          
          
          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>


          <button className={style.ctrlBtn} 
          onClick={()=>
            MovieContext.MoviesDispatch({
            type: actions.REMOVE_MOVIE_FROM_WATCHED, 
            payload: movie,
           })}
          
          >
            <i className='fa-fw fa fa-times' />
          </button>
      </>
        )
      }
     
     
      </div>

  )
}