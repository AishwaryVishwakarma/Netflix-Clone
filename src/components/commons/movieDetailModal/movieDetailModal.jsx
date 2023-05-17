import React from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const MovieDetailModal = ({ setIsModalOpen, movieDetail }) => {
  React.useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsModalOpen(false)
      }
    }
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [setIsModalOpen])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return createPortal(
    <>
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          setIsModalOpen(false)
        }}
      >
        {' '}
      </div>
      <div className={styles.modalContent}>
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
        ></img>
        {/* {movieDetail.original_title} */}
        <div className={styles.blurContainer}></div>

        <div className={styles.overviewContainer}>
          <div className={styles.firstColumn}>
            <div className={styles.statsContainer}>
              <div className={styles.voteAverage}>
                {movieDetail.vote_average *10}% Match
              </div>
              <div>
                {movieDetail.release_date}
              </div>
              
            </div>
            <div className={styles.storyDescription}>
              {movieDetail.overview}
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.genresContainer}>
              <span>Genres</span>
              <div className={styles.genres}>
                {movieDetail.genres.map((genre) => (
                  <p className={styles.genreTitle}>{genre.name},</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('movie-detail-modal')
  )
}

export default MovieDetailModal
