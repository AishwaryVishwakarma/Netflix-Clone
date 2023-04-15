import React from 'react'
import axios from 'axios'

const API_KEY = '9c3fd4dd152d57af68bd8d3ebd55fce0'

const PopularMovies = () => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
  }, [])

  console.log(movies)

  return <div>hello world</div>
}

export default PopularMovies
