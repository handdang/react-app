import './App.css';
function Counter(props){
  console.log(props)
  return  <div><h1>{props.title}</h1>
  <button>+</button> {props.count}</div>
}
function App() {
  return (
    <div>
      <Counter title="홍민 안녕" count="1"></Counter>
    </div>
  );
}

export default App;
