const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => { //hooks => state, setState를 하나씩 분리해줌
  const [word, setWord] = useState('오형남'); //hooks안에 꼭 넣어줘야함
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null); //useRef 로 DOM 에 접근, 추가로 current 하나 더 붙여줘야함

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]){
      setWord(value);
      setValue('');
      setResult('딩동댕');
      inputRef.current.focus();
    } else{
      setValue('');
      setResult('땡');
      inputRef.current.focus();
    }
};


  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value}/>
        <button type="submit" name="button">입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  )
}

module.exports = WordRelay;
