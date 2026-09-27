import { useState, useContext } from 'react';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import Header from '../components/Header';
import { DiaryStateContext } from '../App';

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  const onIncreseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreseMonth}></Button>}
        rightChild={<Button text={'>'} onClick={onIncreseMonth}></Button>}
      ></Header>
      <DiaryList data={monthlyData}></DiaryList>
    </div>
  );
}

export default Home;
