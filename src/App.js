import React from 'react';
import './App.css';

const MyInput = React.forwardRef((props, ref) => {
  const [val, setVal] = React.useState('');
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    }
  }));

  return (
    <input
      ref={inputRef}
      val={val}
      onChange={e => setVal(e.target.value)}
      {...props}
    />
  );
});

const App = () => {
  const ref = React.useRef(null);
  const onBlur = () => {
    console.log(ref.current); // Only contains one property!
    ref.current.blur();
  };

  return (
    <>
      <div>useImperativeHandle() allows adding functions to ref </div>
      <br />
      <MyInput ref={ref} onBlur={onBlur} />
    </>
  );
};

export default App;
