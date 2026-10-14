import './App.css';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route, data } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      nextState = [...state, action.data];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }

    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef();

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      idRef.current = 1;
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      idRef.current = 1;
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // localStorage.setItem('test', 'hello')
  // localStorage.setItem(
  //   'person',
  //   JSON.stringify({
  //     name: '이정환',
  //   }),
  // );

  // console.log(localStorage.getItem('test'));
  // console.log(JSON.parse(localStorage.getItem('person')));

  // localStorage.removeItem('test')
  // localStorage.removeItem('person')

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
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

  if (isLoading) {
    return <div>데이터 로딩중 입니다...</div>
  }

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
