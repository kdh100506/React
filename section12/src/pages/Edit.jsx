import { data, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

function Edit() {
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  usePageTitle(`${params.id}번 일기 수정`)

  const onClickDelete = () => {
    if (window.confirm('일기를 절말 삭제할까요? 다시 복구되지 않아요.')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('정말로 일기를 수정할까요?')) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)}></Button>}
        rightChild={<Button text={'삭제하기'} type={'NEGATIVE'} onClick={onClickDelete}></Button>}
      ></Header>
      <Editor onSubmit={onSubmit} initData={curDiaryItem}></Editor>
    </div>
  );
}

export default Edit;
