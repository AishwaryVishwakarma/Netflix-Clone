import React, { useContext, useState } from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import PopularMovies from '../../components/Home/Popular-Movies/PopularMovies'
import Footer from '../../components/Footer/Footer'
import GenericMovies from '../../components/Home/Generic-Movies/GenericMovies'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { createContext } from 'react'

export const UserContext = createContext()

const API_KEY = '9c3fd4dd152d57af68bd8d3ebd55fce0'

const MOVIES_LIST = [
  {
    name: 'Popular Today',
    type: 'Popular',
    // api_endpoint: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  },
  {
    name: 'Harry Potter',
    type: 'search',
    // api_endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.name}`
  },
  {
    name: 'Pirates of the caribbean',
    type: 'search',
    // api_endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Pirates of the caribbean}`
  },
  {
    name: 'Star Wars',
    type: 'search',
    // api_endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Star Wars`
  }
]

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const prevTitle = React.useRef(document.title)

  React.useEffect(() => {
    document.title = 'Home - Netflix'

    return () => {
      document.title = prevTitle.current
    }
  }, [])

  return (
    <UserContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className={styles.home}>
        <Navbar />
        <div className={styles.videoContainer}>
          <iframe
            src='https://www.youtube.com/embed/1JLUn2DFW4w?autoplay=1&mute=1&loop=1&controls=0&playlist=1JLUn2DFW4w'
            frameBorder='0'
          ></iframe>
        </div>
        <div className={styles.viewOptions}>
          <div className={styles.playButton}>
            <BsFillPlayFill className={`${styles.playIcon}`} /> Play
          </div>
          <div className={styles.moreInfo}>
            <AiOutlineInfoCircle className={`${styles.infoIcon}`} /> More info
          </div>
        </div>
        {MOVIES_LIST.map((movie) => (
          <GenericMovies
            movieName={movie.name}
            query={movie.type}
          />
        ))}
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default HomePage
