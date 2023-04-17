import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import PopularMovies from '../../components/Home/Popular-Movies/PopularMovies'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  const prevTitle = React.useRef(document.title)

  React.useEffect(() => {
    document.title = 'Home - Netflix'

    return () => {
      document.title = prevTitle.current
    }
  }, [])

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1&mute=1&loop=1&controls=0"
          frameborder="0"
        ></iframe>
        <div className={styles.blurContainer}></div>
      </div>
      <PopularMovies />
      <Footer />
    </div>
  )
}

export default HomePage
