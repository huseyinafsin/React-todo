import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

    const [todos,setTodos] = useState([
        {id:"1", task:"Lorem Ipsum ldksdsd  ", completed:false},
    ])
    const LOCAL_STORAGE_KEY="todo-TodoList"
    function addTodo(todo) {
        setTodos([...todos, todo, ])
    }

    // useEffect( ()=>{
    //     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //     if(setTodos){
    //         setTodos(storageTodos)
    //     }
    // },[]);
    
    // useEffect(()=>{
    //     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
    // }, [todos])


    function removeTodo(id) {
        console.log(todos);
        console.log(id);
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function editTodo(e ,id) {
      const filteredItem =todos.filter( item=>
        item.id !== id);

      const selectedItem = todos.find(item=> item.id===id )
        setTodos([...filteredItem,{id:selectedItem.id, task: e}])
      }


  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-10">
                <TodoAdd addTodo={addTodo}/>
                <br></br>
                <div className="border">
                <TodoList todos={todos} editTodo={editTodo}  removeTodo={removeTodo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
