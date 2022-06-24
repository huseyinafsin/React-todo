import "../App.css";
import { useState } from "react";
import {v4 as uuid, v4} from "uuid"; 
function TodoEdit({editTodo}) {

  const [todo,setTodo] = useState({
    id:"",
    task:"",
    completed:false
  })

  function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value});
  }  

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
        editTodo({...todo })
        setTodo({...todo,task:""})
    }
  }

  return(
    <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Edit Todo"
            name="task"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <div className="col-md-3">
             <button id="btnAdd" className="btn btn-success" type="submit">Add</button>
         </div>
    </form>
  )

}

export default TodoEdit;
