import './Button.css';

function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} type="button" className={`Button Button_${type}`}>
      {text}
    </button>
  );
}

export default Button;
