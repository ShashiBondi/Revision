import { useState } from "react";
import React from "react";

export default function Update() {
  const [updatedTodo, setUpdatedTodo] = useState("");
  function inputTodo(event) {
    setUpdateTodo(event.target.value);
  }

  return (
    <div className="update">
      <div>
        <input
          type="text"
          placeholder="update your todo"
          value={updatedTodo}
          onChange={inputTodo}
        />
      </div>
    </div>
  );
}
