export default function TodoItem({id, title, complete, toggleTodo, deleteTodo}) {
    return (
        <li>
        <label>
          <input type="checkbox" checked={complete} onChange={e => toggleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    )
}