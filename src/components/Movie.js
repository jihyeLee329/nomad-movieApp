import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie({coverImg, title,summary,genres, id}){
    return (
        <div>
          <img src={coverImg} alt={title}/>
          <h2><Link to={`/movie/${id}`}>{title}</Link></h2> 
          <p>{summary}</p>
          <ul>
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