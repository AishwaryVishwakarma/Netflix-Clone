import React from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'

const MovieDetailModal = ({ handleCloseButton,movieDetail }) => {
  return createPortal(
    <>
      <div className={styles.modalBackdrop} > </div>
      <div className={styles.modalContent}>
        <div className={styles.modalContainer}>

          <img  src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}></img>
          <div className={styles.overviewContainer}></div>
        </div>
        <h2>{movieDetail.original_title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {handleCloseButton}
      </div>
    </>,
    document.getElementById('movie-detail-modal')
  )
}

export default MovieDetailModal
