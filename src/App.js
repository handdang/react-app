import './App.css';
import {useState, useEffect} from 'react';
function Counter({ title, initValue }){
  // let countState = useState(props.initValue);
  // console.log(countState) //상태는 배열이다. 배열의 첫번째 원소는 상태의 값이다. 두번째 원소는 상태의 값을 바꿀때 호출하는 함수이다.
  // let count = countState[0];
  // let setCount = countState[1];
  const [count ,setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5,5]);
  function up(){
    const newCount = count + step;
    setCount(newCount);
    const newHistory = [...history];
    newHistory.push(newCount);
    setHistory(newHistory);
  }
  function stepHandeler() {
    return (evt) => {
      setStep(Number(evt.target.value));
    };
  }
  return  <div>
    <h1>{title}</h1>
    <button onClick={up}>+</button> {count}
    <input type="number" value={step} onChange={stepHandeler()}/>
    {count}
    <ol>
      {history.map((e,index)=><li key={index}>{e}</li>)}
    </ol>
  </div>
}
function CounterUseEffect(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(oldCount => oldCount + 1);
    }, 1000)
    return ()=>{
      clearInterval(id);
    }
  },[]);
  
  return <div>
    <h1>useEffect Counter</h1> {count}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="버튼 카운터" initValue={10}></Counter>
      <CounterUseEffect></CounterUseEffect>
    </div>
  );
}

export default App;



// map함수
// let num = [1,2,3];
// num2 = num.map((e)=>{
//     console.log('call',e);
//     return e*10; 
// })
// num, num2

// 생략 하면
// let num = [1,2,3];
// num2 = num.map((e)=>e*10)
// num, num2