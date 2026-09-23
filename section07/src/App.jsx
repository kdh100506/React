import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);

  // 마운트 : 탄생
  useEffect(() => {
    console.log('Mount');
  }, []);

  // 업데이트 : 변화, 리렌더링
  // 마운트 시에는 실행하고 싶지 않다면 if문 사용 아니면 사용 안함
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('Update');
  });

  //언마운트 : 죽음
  

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`input: ${input}`);
  }, [input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count}></Viewer>
        {count % 2 === 0 ? <Even></Even> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
