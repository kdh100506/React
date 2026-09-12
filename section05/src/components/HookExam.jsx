import useInput from '../hooks/useInput'

// 1. 함수 컴포넌트, 커스텀 훅 안에서만 호출 가능
// 2. 조건부로 호출할수 없다
// 3. 나만의 훅을 직접 만들수 있다

const HookExam = () => {
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()
  return (
    <div>
      <input type="text" value={input} onChange={onChange}></input>
      <input type="text" value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
