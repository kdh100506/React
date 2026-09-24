import { useState } from 'react';
import './App.css';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  { id: 0, isDone: true, content: '집가고 싶다', date: new Date().getTime() },
  { id: 1, isDone: true, content: '너무 집가고 싶다', date: new Date().getTime() },
  { id: 2, isDone: true, content: '너무 너무 집가고 싶다', date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState([mockData]);

  return (
    <div className="App">
      <Header></Header>
      <Editer></Editer>
      <List></List>
    </div>
  );
}

export default App;
