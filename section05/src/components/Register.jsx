import { useRef, useState } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      inputRef.current.focus()
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={input.name} placeholder="이름" onChange={onChange} name="name" ref={inputRef} />
      </div>
      <div>
        <input type="date" onChange={onChange} value={input.birth} name="birth" />
      </div>
      <div>
        <select name="country" id="" onChange={onChange} value={input.country}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" id="" onChange={onChange} value={input.bio}></textarea>
      </div>
      <button onClick={onSubmit}>제출 </button>
    </div>
  );
};

export default Register;
