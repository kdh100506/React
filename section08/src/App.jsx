import { useRef, useState } from 'react';
import './App.css';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  { id: 0, isDone: false, content: '집가고 싶다', date: new Date().getTime() },
  { id: 1, isDone: false, content: '너무 집가고 싶다', date: new Date().getTime() },
  { id: 2, isDone: false, content: '너무 너무 집가고 싶다', date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  const idRef = useRef(3)
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos])
  };

  return (
    <div className="App">
      <Header></Header>
      <Editer onCreate={onCreate}></Editer>
      <List todos={todos}></List>
    </div>
  );
}

export default App;
