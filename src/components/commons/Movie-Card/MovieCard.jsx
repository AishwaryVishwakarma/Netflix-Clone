import React from 'react'
import styles from './styles.module.scss'
import { BsFillPlayFill, BsHandThumbsUp } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import axios from 'axios'

const MovieCard = ({ movieData }) => {
  const [detail, setDetail] = React.useState({})
  const [genres, setGenres] = React.useState([])

  React.useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieData.id}?api_key=9c3fd4dd152d57af68bd8d3ebd55fce0&language=en-US`
    )
      .then((res) => {
        setDetail(res.data)
        setGenres(res.data.genres)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.bgContainer}>
      <div className={styles.movieCardWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        />
        <div className={styles.detailsContainer}>
          <div className={styles.ctaContainer}>
            <BsFillPlayFill
              className={`${styles.playButton} ${styles.button}`}
            />
            <BsHandThumbsUp
              className={`${styles.thumbsIcon} ${styles.button}`}
            />
            <AiOutlinePlus className={`${styles.plusIcon} ${styles.button}`} />
            <AiOutlineDown className={`${styles.downIcon} ${styles.button}`} />
          </div>
          <p className={styles.title}>{detail.title}</p>
          <div className={styles.genresContainer}>
            {genres.map((genre) => (
              <div className={styles.genre}>
                <RxDotFilled className={styles.dotIcon} />
                <p className={styles.genreTitle}>{genre.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
