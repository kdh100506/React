import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import getStringedDate from '../util/getStringedDate';

function Diary() {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)}></Button>}
        rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${params.id}`)}></Button>}
      ></Header>
      <Viewer emotionId={emotionId} content={content}></Viewer>
    </div>
  );
}

export default Diary;
