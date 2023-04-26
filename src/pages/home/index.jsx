import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import PopularMovies from '../../components/Home/Popular-Movies/PopularMovies'
import Footer from '../../components/Footer/Footer'
import GenericMovies from '../../components/Home/Generic-Movies/GenericMovies'

const HomePage = () => {
  const prevTitle = React.useRef(document.title)

  React.useEffect(() => {
    document.title = 'Home - Netflix'

    return () => {
      document.title = prevTitle.current
    }
  }, [])

  const movies_list = [
    {name: 'Harry Potter'},
    { name: 'pirates of the caribbean' },
    { name: 'Star Wars' }
  ]

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.videoContainer}>
        <iframe
          src='https://www.youtube.com/embed/1JLUn2DFW4w?autoplay=1&mute=1&loop=1&controls=0&playlist=1JLUn2DFW4w'
          frameBorder='0'
        ></iframe>
      </div>
      <PopularMovies />
      {
        movies_list.map((movie)=>{
          <GenericMovies movie_list={movie.name}/>
        })
      }
      <Footer />
    </div>
  )
}

export default HomePage
