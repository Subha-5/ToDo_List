export default function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={/*todo.completed*/ completed} onChange={e => toggleTodo(/*todo.id*/ id, e.target.checked)} />
                {/*todo.title*/ title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(/*todo.id*/ id)}>Delete</button>
        </li>
    );
}