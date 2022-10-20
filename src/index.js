import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style.css';
import Tasks from'./tasks';



//hello
//console.log('hi');

//hi

/*class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{}</div>
            <ol>{}</ol>
          </div>
        </div>
      );
    }
  }*/
  
  // ========================================
  
  //const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(<Game />);

  function List() {
    return(
      <div id = "container">
        
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700"
          rel="stylesheet"/>
        <header>
          <input  type="text" placeholder="Enter a task..." id="item" />
          <button id="add" >Add</button>
        </header>
        <h2>To Do</h2>
        <ul class="todo" id="todo"></ul>
        <h2>Completed</h2>
        <ul class="completed" id="completed"></ul>
        <button id="add">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </button>
        <ul class="todo" id="todo">
          <li>
            item1
            <span class="buttons">
              <button class="remove"></button>
              <button class="complete"></button>
            </span>
          </li>
        </ul> 

      </div>
    );
  }
    

  document.addEventListener('DOMContentLoaded', function() {
    // button to add new item
    let addButton = document.querySelector('#add')
    // input field to add new item
    let addInput = document.querySelector('#item')

    // add the svg icons for the buttons
    let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`
    let completeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`

    addButton.addEventListener('click', function () {
      // grab the value of the input tag
      let newItem = document.getElementById('item').value
      // if the input tag is not empty then run our function to add an item
      if (newItem) {
        // this function will add a new item to the todo list
        addItemTodo(newItem)
        // reset the input after we added a new item
        document.getElementById('item').value = ''
      }
    })

    addInput.addEventListener('keypress', function (e) {
      // did the user press *enter*? if yes then continue
      if (13 === e.keyCode ) {
        // grab the value of the input tag
        let newItem = document.getElementById('item').value
        // if the input tag is not empty then run our function to add an item
        if (newItem) {
          // this function will add a new item to the todo list
          addItemTodo(newItem)
          // reset the input after we added a new item
          document.getElementById('item').value = ''
        }
      }
    })

    function addItemTodo(text) {
      // grab the `ul`
      let list = document.getElementById('todo')
      // create an `li`
      let item = document.createElement('li')
      // set the inside of our `li` the same as the parameter that we passed in the function, which is going to be the value set by the user in the input field
      item.innerText = text
      //create container for our buttons remove and complete
      let buttons = document.createElement('div')
      buttons.classList.add('buttons')
      // create the two buttons
      let remove = document.createElement('button')
      remove.classList.add('remove')
      // add the SVG icon to the button
      remove.innerHTML = removeSVG
      // add event listener for remove
      // this function will be definedd later
      remove.addEventListener('click', removeItem)
      let complete = document.createElement('button')
      complete.classList.add('complete')
      // add the SVG icon to the button
      complete.innerHTML = completeSVG
      // add event listener for complete
      // this function will be defined later
      complete.addEventListener('click', completeItem)
      // append the buttons to the div
      buttons.appendChild(remove)
      buttons.appendChild(complete)
      // append the whole div to the li
      item.appendChild(buttons)
      // prepend the `li` to the `ul`
      list.insertBefore(item, list.childNodes[0])
    }

    function completeItem() {
      // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
      let item = this.parentNode.parentNode
      // grab the `ul` (li -> ul)
      let parent = item.parentNode
      // grab the parent id
      let id = parent.id
      // check if the item should go in the completed or if it should be re-added to todo by using a ternary operator
      let target =
        id === 'todo'
          ? document.getElementById('completed')
          : document.getElementById('todo')
      // remove the item to its current `ul`
      parent.removeChild(item)
      // add the item to the new `ul`
      target.insertBefore(item, target.childNodes[0])
    }

    function removeItem() {
      // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
      let item = this.parentNode.parentNode
      // grab the `ul` (li -> ul)
      let parent = item.parentNode
      // remove `li` from `ul`
      parent.removeChild(item)
    }

  } );


  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<List />);
  
  
  