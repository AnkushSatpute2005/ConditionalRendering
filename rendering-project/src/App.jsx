import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Todo1",
      desc: "I am first todo..",
    },
    {
      title: "Todo2",
      desc: "I am second todo..",
    },
    {
      title: "Todo3",
      desc: "I am third todo..",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div className="m-4 border border-4 border-black-400">
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* this is the example of normal conditional renderin */}
      {/* {showBtn?<button>Button is true </button>:<button>Button is false </button>} */}

      {/* this is easiear way to conditional rendering than above ^ technique ,in this case button is only display when showBtn state is true otherewise do nothing OR you want to do somthing otherwise so you use the above turnary operator fo conditional rendering */}
      {showBtn && <button>Button is true </button>}

      {/* this is special technique to rendering list of todos in jsx */}
      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo} />;
        //instade of using this way you can also follow this:
        return (
              <>
                <div key={todo.title} className="m-4 border border-4 border-black-400">
                  {/* key is important otherwise it raise an error in console section*/}
                  <div className="todo">{todo.title}</div>
                  <div className="todo">{todo.desc}</div>
                </div>
              </>
            );
      })}

      {/* <Todo todo = {todos}/> */}

      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          button is {showBtn}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
