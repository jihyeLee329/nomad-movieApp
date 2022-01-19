import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

function Detail(){
    const [loading, setLoading] = useState(true);
    const [infos,setInfos] = useState([]);
    //useParams 를 쓰면, 지금 컴포넌트를 감싸는 Route에서 설정한 :변수 를 바로 받아줌
    const {id} = useParams();
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
         ).json(); 
         setInfos(json.data.movie);
         setLoading(false);
         
    }
    useEffect(()=>{
        //await는 asyne 함수 내부에 있지 않으면 사용할 수 없음. 
      getMovie();  
    },[]);
    console.log(infos)
    return (
        <div>
          {loading ? <h1>loading...</h1> : 
          <div>
              <h1>{infos.title}</h1>
              <img src={infos.medium_cover_image} alt={infos.title}/>
            <p>{infos.description_intro}</p>
            <ul>{infos.genres.map((info, index)=> (
                <li key={index}>{info}</li>
            ))}</ul>
          </div> }
        </div>
    );
}
export default Detail;