function Button({ children, text, color = 'black' }) {
  console.log(text);
  const onClickButton = (e) => {
    console.log({e})
    console.log({ text });
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  );
}

export default Button;
