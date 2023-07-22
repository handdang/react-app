import './App.css';
import {useState} from 'react';
function Counter(props){
  let countState = useState(props.initValue);
  console.log(countState) //상태는 배열이다. 배열의 첫번째 원소는 상태의 값이다. 두번째 원소는 상태의 값을 바꿀때 호출하는 함수이다.
  let count = countState[0];
  let setCount = countState[1];

  function up(){
    setCount(count + 1);
    if(count === 15) alert('나두 사랑해!')
  }
  return  <div><h1>{props.title}</h1>
  <button onClick={up}>+</button> {count}</div>
}
function App() {
  return (
    <div>
      <Counter title="날 사랑하는 만큼 눌러" initValue={10}></Counter>
    </div>
  );
}

export default App;
