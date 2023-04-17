import React from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import MovieCard from '../../commons/Movie-Card/MovieCard'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const API_KEY = '9c3fd4dd152d57af68bd8d3ebd55fce0'

const PopularMovies = () => {
  const [movies, setMovies] = React.useState([])
  let cardsSectionRef = React.useRef()

  const scroll = (scrollOffset) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
  }, [])

  console.log(movies)

  return (
    <div className={styles.PMwrapper}>
      <div className={styles.heading}>Popular Today!</div>
      <div>
        <div ref={cardsSectionRef} className={styles.cardsContainer}>
          {movies.map((element, idx) => (
            <MovieCard poster_path={element.poster_path} />
          ))}
          <button
            type="button"
            className={styles.prevButton}
            onClick={() => scroll(-1400)}
          >
            <MdNavigateBefore className={styles.buttonIcons} />
          </button>
          <button
            type="button"
            className={styles.nextButton}
            onClick={() => scroll(1400)}
          >
            <MdNavigateNext className={styles.buttonIcons} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopularMovies
