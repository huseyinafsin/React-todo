import "../App.css";
import { useState } from "react";
import {v4 as uuid, v4} from "uuid"; 
function TodoAdd({addTodo}) {

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
        addTodo({...todo, id: v4()})
        setTodo({...todo,task:""})
    }
  }

  return(
    <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              className="form-control col"
              type="text"
              placeholder="Add new .."
              name="task"
              value={todo.task}
              onChange={handleTaskInputChange}
            />
            <div className="col-md-2">
              <button id="btnAdd" className="btn btn-success" type="submit">Add</button>
          </div>
            </div>
    </form>
  )

}

export default TodoAdd;
