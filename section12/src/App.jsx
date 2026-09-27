import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route, data } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

const mockData = [
  {
    id: 1,
    createdDate: new Date('2026-09-19').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date('2026-09-18').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2026-08-18').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/new" element={<New></New>}></Route>
            <Route path="/diary/:id" element={<Diary></Diary>}></Route>
            <Route path="/edit/:id" element={<Edit></Edit>}></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </DiaryDispatchContext>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
