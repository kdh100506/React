import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import getEmotionImage from './util/get.emotion-image';

function App() {
  const nav = useNavigate();
  const onClickButton = (e) => {
    nav(e.target.value);
  };
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="이모션 이미지 1" />
        <img src={getEmotionImage(2)} alt="이모션 이미지 2" />
        <img src={getEmotionImage(3)} alt="이모션 이미지 3" />
        <img src={getEmotionImage(4)} alt="이모션 이미지 4" />
        <img src={getEmotionImage(5)} alt="이모션 이미지 5" />
      </div>
      <Link to={'/'}>Home</Link>
      <Link to={'/new'}>New</Link>
      <Link to={'/diary'}>Diary</Link>
      <button onClick={onClickButton} value={'/new'}>
        New 페이지로 이동
      </button>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
