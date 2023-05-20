import React from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import MovieCard from '../../commons/Movie-Card/MovieCard';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const API_KEY = '9c3fd4dd152d57af68bd8d3ebd55fce0';

const GenericMovies = ({movieName, query}) => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const CARD_SEKELETONS = Array.apply(null, Array(10)).map(function () {});

  let cardsSectionRef = React.useRef();

  const scroll = (scrollOffset) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset;
    }
  };

  const URL =
    query === 'search'
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}`
      : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(URL)
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.blurContainer} />
      <div className={styles.sectionWrapper}>
        <div className={styles.heading}>
          {isLoading ? (
            <Skeleton
              className={styles.headingSkeleton}
              highlightColor='lightgrey'
              baseColor='grey'
              duration={1}
              width={300}
            />
          ) : query == 'search' ? (
            `${movieName} Movies`
          ) : (
            'Popular Today'
          )}
        </div>
        <div ref={cardsSectionRef} className={styles.cardsContainer}>
          {isLoading &&
            CARD_SEKELETONS.map(() => (
              <Skeleton
                highlightColor='lightgrey'
                baseColor='grey'
                duration={1.5}
                height={283}
                width={190}
              />
            ))}
          {movies.map((element, idx) => (
            <MovieCard key={element.id} movieData={element} />
          ))}
          <button
            type='button'
            className={styles.prevButton}
            onClick={() => scroll(-1400)}
          >
            <MdNavigateBefore className={styles.buttonIcons} />
          </button>
          <button
            type='button'
            className={styles.nextButton}
            onClick={() => scroll(1400)}
          >
            <MdNavigateNext className={styles.buttonIcons} />
          </button>
        </div>
      </div>
    </>
  );
};

export default GenericMovies;
