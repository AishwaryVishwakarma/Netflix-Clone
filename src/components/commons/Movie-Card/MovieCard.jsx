import React from 'react'
import styles from './styles.module.scss'

const MovieCard = ({ poster_path }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
    </div>
  )
}

export default MovieCard
