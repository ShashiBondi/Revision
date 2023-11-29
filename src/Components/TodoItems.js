import { useNavigate } from "react-router-dom";

function TodoItems(props) {
  const { item, deleteButton, checkItems } = props;
  return (
    <div key={item.id}>
      {item.name}
      <button>UPDATE</button>
      <button
        onClick={function y() {
          deleteButton(item.id);
        }}
      >
        DELETE
      </button>
      <input
        type="checkbox"
        onChange={function y(event) {
          checkItems(item.id, event);
        }}
        checked={item.isCompleted}
      />
    </div>
  );
}
export default TodoItems;
