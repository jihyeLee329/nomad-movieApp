import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Detail from './routes/Detail'
import './App.css'

function App() {
  return (<Router>  
    {/* Router 에서는 두개의 Route를 한번에 렌더링 가능
      Router은 동적 url을 지원함. 동적 url은 변수를 쓸수있다는 뜻 
      Switch 역할 : Route 찾고, 한 번에 하나의 Route만 렌더링
      BrowserRouter과 Router 차이점은 URL의 모습 ( 브라우저라우터는 우리가 아는 url모양) 
    */}
      {/* path경로 에 :id 부분은 movie페이지에서 id란 변수로 url을 받을거다~란 뜻 */}
      <Routes>

        <Route path="/movie/:id"element={<Detail/>} />
        <Route path="/" element={<Home/>}/>   {/* Route 역할 : Route 안에 컴포넌트 써주기  */}
       
      </Routes>
  </Router>
  );
}

export default App;
