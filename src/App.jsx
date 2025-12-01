import Mandoo from "./Mandoo";
import {useState} from "react"

const mandooTodoLists = {
  todos: ["간식 먹기", "화분 돌 다 꺼내기", "공유기 위에서 자기"],
};

export default function App() {
  const [state, setState] = useState(0)
  const [num, setNum] = useState()
  
  return (
    <main style={{ padding: "20px" }}>
      <h3>Mandoo Todo</h3>
      <Mandoo width={100} />
      <ul>
       {mandooTodoLists.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
       ))}
      </ul>

       <h1>{state}</h1>

        <button onClick={() => {
          setState(state+1)
        }}>
          +1
        </button>

        <br />

        <input type="text" placeholder="숫자만 적으세요" onChange={e => setNum(e.target.value)}/>
        <br />
        <button onClick={() => {
          setState(state+Number(num))
        }}>
          + {num}
        </button>
    </main>
  );
}