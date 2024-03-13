import './App.css'
import Users from './Users'
import Counter from './counter'


function App() {

  const handleClick = () =>{
    alert('Button Has been clicked')
  }
  const handleAdd= (num) =>{
    alert(num +5)
  }
  return (
    <>
      <h2>React Core Concepts</h2>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Click</button>
      <button onClick={() =>handleAdd(5)}>Add five</button>
    </>
  )
}

export default App
