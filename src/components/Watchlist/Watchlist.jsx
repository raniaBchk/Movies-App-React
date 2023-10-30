import React from 'react'
import Header from '../Header/Header'
import style from './watchlist.module.css'
import { useMovieContext } from '../context/GlobalContext'
import { MovieCard } from '../MovieCard/MovieCard'

const Watchlist = () => {
  const MovieContext=useMovieContext();
 
  return (

    <div>
         <Header/>

         <div className={style.moviePage}>
             <div className={style.container}>
                <div className={style.header}>
                  <h1 className={style.heading}>My Watchlist</h1>
                      <span className={style.countPill}>
                  {MovieContext.watchlist.length} {MovieContext.watchlist.length === 1 ? 'Movie':
                   'Movies' }</span>

                </div>


          {MovieContext.watchlist.length>0 ? 
          
          (
            
            <div className={style.movieGrid}>
          { MovieContext.watchlist.map((movie)=>
          (

          
              <MovieCard movie={movie} type="watchlist" key={movie.imdbID}/>
            

          ))}
            
            </div>
            )
            

          : (<h2 className={style.noMovies}>no movie in watchlist</h2>)
          }


          
 
    
    </div>
    </div>
    </div>
  )
  }

export default Watchlist