import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo =>
                <TodoItem
                    /*id={todo.id} completed={todo.completed} title={todo.title}*/
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    );
}