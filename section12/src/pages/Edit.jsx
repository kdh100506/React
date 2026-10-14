import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

function Edit() {
  const { onUpdate } = useContext(DiaryDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  const onSubmit = (input) => {
    onUpdate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/');
  }; 
  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)}></Button>}
        rightChild={<Button text={'삭제하기'} type={'NEGATIVE'} ></Button>}
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
}

export default Edit;
