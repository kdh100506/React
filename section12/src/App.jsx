import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import Button from './components/Button';
import Header from './components/Header';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
];

function reducer(state) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

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
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
