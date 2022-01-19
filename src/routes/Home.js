import {useEffect, useState} from 'react';
import Movie from '../components/Movie'

function Home(){
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  // const getMovies = async()=>{
  //     const response = await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
  //     `)
  //     const json = await response.json();
  //     setMovies(json.data.movies);
  //     setLoading(false);
  // };

  const getMovies = async()=>{
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    `)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
};

  useEffect(()=>{
    getMovies();
  },[])
  console.log(movies)
  // useEffect(()=>{
  //   //요즘 fetch,then 보단 async-await 씀!! 
  //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
  //   .then(response => response.json())
  //   .then(json => setMovies(json.data.movies));
  //   setLoading(false);
  // },[]);
  return (
    <div>
      {loading ?
      <h1>Loading...</h1>: 
      <div>{movies.map((movie)=>
         <Movie 
        //  key는 React.js에서만. map 안에서 컴포넌트들을 render할 때 사용
         key={movie.id}
         id={movie.id}
         coverImg={movie.medium_cover_image}
         title={movie.title}
         summary ={movie.summary}
         genres ={movie.genres}
         />
      )}</div>}
    </div>
  );
}
export default Home