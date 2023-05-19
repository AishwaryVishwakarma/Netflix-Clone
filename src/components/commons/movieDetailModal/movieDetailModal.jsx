import React from 'react';
import styles from './styles.module.scss';
import {createPortal} from 'react-dom';
import {useEffect} from 'react';
import {FaAudioDescription} from 'react-icons/fa';
import {MdOutlineSubtitles, MdOutlineClose} from 'react-icons/md';
import {BsFillPlayFill, BsHandThumbsUp} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {UserContext} from '../../../pages/home/index';

const MovieDetailModal = ({movieDetail}) => {
  const {isModalOpen, setIsModalOpen} = React.useContext(UserContext);

  React.useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [setIsModalOpen]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <>
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        {' '}
      </div>
      <div className={styles.modalContent}>
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
        ></img>
        <div className={styles.viewOptions}>
          <div className={styles.playButton}>
            <BsFillPlayFill className={`${styles.playIcon} ${styles.button}`} />{' '}
            Play
          </div>
          <div className={styles.otherOptions}>
            <AiOutlinePlus className={styles.button} />
            <BsHandThumbsUp className={styles.button} />
          </div>
        </div>
        <div
          className={styles.closeButton}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <MdOutlineClose className={styles.button} />
        </div>

        <div className={styles.blurContainer}></div>

        <div className={styles.overviewContainer}>
          <div className={styles.firstColumn}>
            <div className={styles.statsContainer}>
              <div className={styles.matchPercentage}>
                {Math.round(movieDetail.vote_average * 10)}% Match
              </div>
              <div className={styles.releaseDate}>
                {movieDetail.releaseDate &&
                  movieDetail.release_date.substring(0, 4)}
              </div>
              <div>
                {`${Math.round(movieDetail.runtime / 60)}h ${
                  movieDetail.runtime % 60
                } min`}
              </div>
              <div className={styles.icons}>
                <FaAudioDescription />
                <MdOutlineSubtitles />
              </div>
            </div>
            <div className={styles.movieTitle}>
              {movieDetail.original_title}
            </div>
            <div className={styles.storyDescription}>
              {movieDetail.overview}
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.genresContainer}>
              <span>Genres</span>
              <div className={styles.genres}>
                {movieDetail.genres?.map((genre, idx) => (
                  <p className={styles.genreTitle} key={idx}>
                    {genre.name},
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('movie-detail-modal')
  );
};

export default MovieDetailModal;
