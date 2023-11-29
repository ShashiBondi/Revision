import { useState } from "react";
import { v4 } from "uuid";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [ticked, setTicked] = useState("all");

  function inputChange(event) {
    setInputText(event.target.value);
  }

  function clickButton() {
    const x = todos.concat({ id: v4(), name: inputText, isCompleted: false });
    setToDos(x);
    setInputText("");
  }

  function deleteItems(key) {
    const y = todos.filter(function (item) {
      return item.id !== key;
    });
    setToDos(y);
  }

  function checkItems(id, event) {
    const checkedItems = todos.map(function (item) {
      if (item.id === id) item.isCompleted = event.target.checked;
      return item;
    });
    setToDos(checkedItems);
  }

  function onRadioChange(event) {
    setTicked(event.target.id);
  }
  const displayToDos = todos
    .filter(function (item) {
      if (ticked === "all") return true;
      else if (ticked === "completed") return item.isCompleted;
      else return !item.isCompleted;
    })
    .map(function (item) {
      return (
        <TodoItems
          item={item}
          deleteButton={deleteItems}
          checkItems={checkItems}
        />
      );
    });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add- your todo"
        onChange={function k(event) {
          inputChange(event);
        }}
        value={inputText}
      />
      <button onClick={clickButton}>ADD</button>
      <div>
        <input
          type="radio"
          id="all"
          checked={ticked === "all"}
          onChange={onRadioChange}
        />
        <span>All Tasks</span>
        <input
          type="radio"
          id="completed"
          checked={ticked === "completed"}
          onChange={onRadioChange}
        />
        <span>Completed Tasks</span>
        <input
          type="radio"
          id="pending"
          checked={ticked === "pending"}
          onChange={onRadioChange}
        />
        <span>Pending Tasks</span>
        {displayToDos}
      </div>
      <div></div>
    </div>
  );
}
