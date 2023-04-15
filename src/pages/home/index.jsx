import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import MovieCard from '../../components/Movie Card/MovieCard'

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
      <img src="https://cdn.wallpapersafari.com/87/72/2j1nqe.jpg" alt="" />
      <MovieCard/>
    </>
  )
}

export default HomePage
