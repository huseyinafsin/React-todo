import TodoItem from "./TodoItem";
function TodoList({todos, removeTodo, editTodo}) {

  return (
    <div>
      <hr />
      <br />
      {todos.map((todo) => 
        <div>
            <div className="p-3 bg-white">
                <TodoItem id={todo.id} task={todo.task} editTodo={editTodo} completed={todos.completed} removeTodo={removeTodo} />
            </div>
         
        </div>
      )}
    </div>
  );
}
export default TodoList;
