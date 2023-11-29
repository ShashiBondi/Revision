import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TodoItems from "./Components/TodoItems";
import Update from "./Components/Update";

function Main() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={Login} />
          <Route path="/register" element={Signup} />
          <Route path="/todoItems" element={TodoItems} />
          <Route path="/updateTodo" element={Update} />
        </Routes>
      </div>
    </Router>
  );
}
export default Main;
