import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";

function TodoItem({ task,completed, editTodo, removeTodo ,id}) {

  const [input,setInput] = useState(task)
  const inputRef = useRef(null)

    function handleRemoveClick() {
      
        console.log(id);
        removeTodo(id)
    }
    function handleEditing(e) {
        editTodo({
          id:id,
          task:input
        })
    }
    function handleChange(e) {
      setInput(e.target.value)
    }


    function handleComplete() {
      
    }

  return (
    <div>
      <div className="d-flex align-items-center">
        <label>
        <button id="btnComplete" type="button" onClick={handleComplete}><i class="bi bi-check-circle-fill"></i></button>
        <button id="btnRemove" type="button" onClick={handleRemoveClick}><i class="bi bi-x-circle-fill"></i></button>
        <button id="btnEdit" onClick={handleEditing} type="button" ><i class="bi bi-pencil-fill"></i></button>
        <input  value={input} onChange={handleChange} ref={inputRef} className="label-text"/>

        </label>
      </div>
    </div>
  );
}

export default TodoItem;
