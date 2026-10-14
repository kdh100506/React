import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

function New() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true });
  };
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로가기 '} onClick={() => nav(-1)}></Button>}
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
}

export default New;
