import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import New from '../pages/new';
import Diary from '../pages/diary';
import Notfound from '../pages/Notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/new" element={<New></New>}></Route>
      <Route path="/diary" element={<Diary></Diary>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  );
}

export default App;
