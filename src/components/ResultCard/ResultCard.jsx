import React from 'react'
import style from './resultCard.module.css'
import { useMovieContext } from '../context/GlobalContext'
import * as actions from '../context/ActionTypes'


const ResultCard = ({movie}) => {

    
    const MovieContext=useMovieContext();

    const storedMovie=MovieContext.watchlist.find(
        (o)=> o.imdbID===movie.imdbID
    )   // return true or false


    const storedMovieWatched=MovieContext.watched.find(
        (o)=> o.imdbID===movie.imdbID
    )   // return true or false


    const WatchListDisabled = 
    storedMovie ? true :  storedMovieWatched ? true : false ;

    const WatchedDisabled = storedMovieWatched ? true : false ;
   
  return (
    <div className={style.resultCard}>

        <div className={style.posterWrapper}>
        
            {movie.Poster ? (
                <img src={movie.Poster} alt={movie.Title}/>
            ):(
                <div className={style.fillerPoster}></div>
            )}


        </div>


        <div className={style.info}>
            <div className={style.heading}>
                <h3 className={style.title}>{movie.Title}</h3>
                {movie.Year ? <h4 className={style.releaseDate}>{movie.Year}</h4> : '-'}
            </div>
        
        
            
        <div className={style.controls}>
        
        

        <button className={style.btn} 
        onClick={()=>
            MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHLIST, 
            payload: movie,
        })}

        disabled={WatchListDisabled}
        >   
        Add to Watchlist </button>


  

        <button className={style.btn}
        onClick={()=>
            MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHED, 
            payload: movie,
        })}

        disabled={WatchedDisabled}
        >
        Add to Watched</button>
        </div>
    
        </div>

    
    </div>
  )
}

export default ResultCard