import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import PopularMovies from '../../components/Home/Popular-Movies/PopularMovies'

const HomePage = () => {
  const prevTitle = React.useRef(document.title)

  React.useEffect(() => {
    document.title = 'Home - Netflix'

    return () => {
      document.title = prevTitle.current
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <img className={styles.startImage} src="https://cdn.wallpapersafari.com/87/72/2j1nqe.jpg" alt="" />
      <PopularMovies/>
      </div>
    </>
  )
}

export default HomePage
