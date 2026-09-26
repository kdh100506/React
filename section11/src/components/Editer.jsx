import { useRef, useState, useContext } from 'react';
import './Editer.css';
import { todoContext } from '../App';

function Editer() {
  const { onCreate } = useContext(todoContext);
  const [content, setContent] = useState('');

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const contentRef = useRef();

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="Editer">
      <input type="text" placeholder="새로운 Todo" value={content} onChange={onChangeContent} ref={contentRef} onKeyDown={onKeydown}></input>
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
}

export default Editer;
