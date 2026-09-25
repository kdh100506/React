import { useRef, useState } from 'react';
import './App.css';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';
import { data } from 'motion/react-client';

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

function App() {
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header></Header>
      <Editer onCreate={onCreate}></Editer>
      <List></List>
    </div>
  );
}

export default App;
