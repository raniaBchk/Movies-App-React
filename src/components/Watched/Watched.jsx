import React from 'react'
import Header from '../Header/Header'
import style from './watched.module.css'
import { useMovieContext } from '../context/GlobalContext'
import { MovieCard } from '../MovieCard/MovieCard'

const Watched = () => {
  const MovieContext=useMovieContext();
 
  return (

    <div>
         <Header/>

         <div className={style.moviePage}>
             <div className={style.container}>
                <div className={style.header}>
                  <h1 className={style.heading}>My Watched</h1>
                      <span className={style.countPill}>
                  {MovieContext.watched.length} {MovieContext.watched.length === 1 ? 'Movie':
                   'Movies' }</span>

                </div>


          {MovieContext.watched.length>0 ? 
          
          (
            
            <div className={style.movieGrid}>
          { MovieContext.watched.map((movie)=>
          (

          
              <MovieCard movie={movie} type="watched"  key={movie.imdbID}/>
            

          ))}
            
            </div>
            )
            

          : (<h2 className={style.noMovies}>no movie in watched</h2>)
          }


          
 
    
    </div>
    </div>
    </div>
  )
}

export default Watched