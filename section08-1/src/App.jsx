import { useState } from 'react';
import './App.css';
import Editer from './components/Editer';
import Header from './components/Header';
import List from './components/List';
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
  const [toods, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Header></Header>
      <Editer></Editer>
      <List></List>
    </div>
  );
}

export default App;
