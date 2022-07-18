import "./App.css";
import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./components/App.css";

// class component는 class임. but, react component 로부터 확장되고 screen 에 표시됨
// react 는 자동적으로 class component 의 render method를 실행한다.
class App extends React.Component {
  state = {
    //state = object(객체). component 의 data를 넣을 공간이 있고 이 데이터는 변함
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //async await 를 쓴다 = js에게 getMovies function애개 조금 시간이 필요하고,
    // 우린 그걸 기다려야 한다는 뜻!!
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    console.log(movies);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  genres={movie.genres}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
