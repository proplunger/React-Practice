import { useState } from "react"

export default function app(){
  const [newItem, SetNewItem] = useState("Kill");
  const [Todos, SetTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    SetTodos((currentTodos) => {
      return(
        [...currentTodos,{id: crypto.randomUUID(), title: newItem, completed: false},]
      )
    });
  }
  return(
    <> 
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" value={newItem} onChange={e => SetNewItem(e.
        target.value)}/>
    </div>
    <button className="btn">Add Item</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul>
  {Todos.map(Todo =>{
    return(
      <li>
      <label>
        <input type="checkbox" checked={Todo.completed}/>
        {Todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    )
  })}
    
  </ul>
    </>
  )
}