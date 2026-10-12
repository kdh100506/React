import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function New() {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로가기 '} onClick={() => nav(`/`)}></Button>}
      ></Header>
      <Editor></Editor>
    </div>
  );
}

export default New;
