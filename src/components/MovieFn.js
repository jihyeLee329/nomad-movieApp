import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css'
function Movie({coverImg, title,summary,genres, id}){
    return (
        <div className={styles.movie}>
          <img className={styles.movie__img} src={coverImg} alt={title}/>
          <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2> 
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
          <ul className={styles.movie__genres}>
            {/* movie.genres 값이 없는 경우가 있어, 있을 경우 조건 추가해주자. */}
            {/* 그리고 map 함수를 사용할 때는 key 값도 사용해줘야함 */}
           {genres && genres.map((g)=> (<li key={g}>{g}</li>))}
          </ul>
        </div>
    )
}
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres :PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;