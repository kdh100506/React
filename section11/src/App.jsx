import { useRef, useState, useCallback, createContext } from 'react';
import './App.css';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';
import { useReducer, useMemo } from 'react';
// import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'A',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'B',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'C',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const todoStateContext = createContext();
export const todoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <todoStateContext.Provider value={todos}>
        <todoDispatchContext.Provider value={memoizedDispatch}>
          <Editer></Editer>
          <List></List>
        </todoDispatchContext.Provider>
      </todoStateContext.Provider>
    </div>
  );
}

export default App;
