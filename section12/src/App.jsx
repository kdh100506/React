import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const nav = useNavigate();
  const onClickButton = (e) => {
    nav(e.target.value);
  };
  return (
    <>
      <Header title={'Header'} leftChild={<Button text={'left'}></Button>} rightChild={<Button text={'right'}></Button>}></Header>
      <Button text={123} onClick={() => console.log(123)}></Button>
      <Button text={123} type={'POSITIVE'} onClick={() => console.log(123)}></Button>
      <Button text={123} type={'NEGATIVE'} onClick={() => console.log(123)}></Button>
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
