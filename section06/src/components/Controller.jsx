function Controller({ onClickButton }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        type="button"
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        type="button"
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        type="button"
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        type="button"
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        type="button"
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Controller;
