const React = require('react');
const {useState, useRef} = React;

const GuGuDan = () => { //hooks => state, setState를 하나씩 분리해줌
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); //hooks안에 꼭 넣어줘야함
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null); //useRef 로 DOM 에 접근, 추가로 current 하나 더 붙여줘야함

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
        setResult('정답:' + value);
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
    <div>{first}곱하기 {second}는?</div>
    <form onSubmit={onSubmitForm}>
      <input ref={inputRef} onChange={onChangeInput} value={value}/>
      <button type="submit" name="button">입력</button>
    </form>
    <div id="result">{result}</div>
  </>)
}

module.exports = GuGuDan;
