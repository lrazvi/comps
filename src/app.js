import { render } from "@testing-library/react";
import React, {  useState } from "react";
import  ReactDOM  from "react-dom/client";
import {  Link } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style.css';
import Tasks from'./components/tasks';
import Dogs from "./components/calendar";




  /*function List(){
    let butt = useRef(null);
    //render(){
    return(
      <div id = "container">
        <header className = "h">
          <input type="text" placeholder="Enter a task..." id="item" />
          <button type="button" id = "add" ref={butt} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
          </button>
        </header>

        <h2>To Do</h2>
        <ul className="todo" id="todo"></ul>
        <h2>Completed</h2>
        <ul className="completed" id="completed"></ul>

        <ul className="todo" id="todo">
          <li>
          
            <span className="buttons">
              <button className="remove"></button>
              <button className="complete"></button>
            </span>
          </li>
        </ul> 

        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700"
          rel="stylesheet"/>

      </div>

    );
    }
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<List />);

  export default List*/

  function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState({
      todo: "",
      dline: ""
    });
    const [clist, setcList] = useState([]);
    const [point, setPoint] = useState(0);
    //const [date, setDate] = useState("");
    const [desc, setDesc] =  useState("");
    const [delist, setdeList] = useState([])
  
    const addTodo = (todo, dline) => {
      const newTodo = {
        id: Math.random(),
        todo: todo,
        dline: dline
      };

      // add the todo to the list
      setList([...list, newTodo]);
      // clear input box
      setInput({todo:"", dline:""});
      //setDate("");
    };

    const deleteTodo = (id) => {
      // Filter out todo with the id
      const newList = list.filter((todo) => todo.id !== id);
      setList(newList);
      
      const nList = clist.filter((todo) => todo.id !== id);
      setcList(nList);
    };

    const completeTodo = (id) => {
      // Filter out todo with the id
      //const newList = list.filter((todo) => todo.id == id);
      const newList = list.filter((todo) => todo.id !== id);
  
      setList(newList);
      setcList(clist.concat(list.find((todo) => todo.id === id)));
      setPoint(point + 1);
    };

    const addDesc = (desc) => {
      const newDesc = {did: Math.random(), desc:desc};
    
      setdeList([...delist, newDesc]);
      setDesc('');
      //setList([...list, newDesc]);
    }
  
    return (
      <div>
        <header id="head">
          <Link to="/">Home</Link>
          <Link to="/Dogs">Dogs</Link>
          
          <input
            type="text"
            name="task"
            placeholder = "enter a task..."
            value={input.todo}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <input
            type="text"
            name="date"
            placeholder = "deadline: date/time"
            value={input.dline}
            onChange={(i) => setInput(i.target.value)}
          />
          <button id = "add" onClick={() => addTodo(input)}>Add</button>
          
        </header>
        <div id="lists">
          <h1>Todo List</h1>
          <ul>
            {list.map((todo) => (
              <li key={todo.id}>
                {/* <button onClick={addDesc }>{todo.todo}</button> */}
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                <button onClick={() => completeTodo(todo.id)}>done</button>
                <input 
                  value={desc}
                  placeholder = "add a description..."
                  onChange={(i) => setDesc(i.target.value)}
                />
                <button onClick={() => addDesc(desc)}>enter</button>
                {delist.map((desc) => 
                  <li key={desc.did}>
                    
                    {desc.desc}
                    
                  </li>
                )}

              </li>
            ))}
          </ul>
          <h1>Completed</h1>
          <ul>
            {clist.map((todo) => (
              <li key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
            ))}
          </ul>
          <div>
            <h2>Points Earned</h2>
            <p>{point}</p>
          </div>
        </div>
        <link href="https://fonts.cdnfonts.com/css/common-pixel" rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'></link>
      </div>
    );
  }
  
  export default App;

  
  
    

  


  

  
  
  
  