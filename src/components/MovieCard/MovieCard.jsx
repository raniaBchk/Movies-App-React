import React from 'react'
import style from './moviecard.module.css'
import { MovieControls } from '../MovieControls/MovieControls'

export const MovieCard = ({movie,type }) => {
  return (
    <div className={style.movieCard}>
        <div className={style.overlay}></div>
        {
                movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title}></img>
                ): <div className={style.filterPoster}></div>
        }
        <MovieControls movie={movie} type={type} />
    </div>
  )
}