import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from '../pages/home';
import New from '../pages/new';
import Diary from '../pages/diary';
import Notfound from '../pages/Notfound';

function App() {
  const nav = useNavigate();
  const onClickButton = (e) => {
    nav(e.target.value);
  };
  return (
    <>
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
