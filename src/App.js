import './App.css';
import {useState} from 'react';
function Counter({ title, initValue }){
  // let countState = useState(props.initValue);
  // console.log(countState) //상태는 배열이다. 배열의 첫번째 원소는 상태의 값이다. 두번째 원소는 상태의 값을 바꿀때 호출하는 함수이다.
  // let count = countState[0];
  // let setCount = countState[1];
  const [count ,setCount] = useState(initValue);
  const [step, setStep] = useState(1);

  function up(){
    setCount(count + step);
  }
  return  <div>
    <h1>{title}</h1>
    <button onClick={up}>+</button> {count}
    <input type="number" value={step} onChange={(evt)=>{
      console.log('change', evt.target.value);
      setStep(Number(evt.target.value))
    }}/>
    {count}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="버튼 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
