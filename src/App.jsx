import { useState } from "react"
import './styles.css'

export default function app(){
  const [newItem, SetNewItem] = useState();
  const [Todos, SetTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    SetTodos((currentTodos) => {
      return(
        [...currentTodos,{id: crypto.randomUUID(), title: newItem, completed: false},]
      )
    });

    SetNewItem("");
  }

  function toggleTodo(id, completed){
    SetTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
      })
    })
  }

  function deleteTodo(id){
    SetTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
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
    {Todos.length === 0 && "No Todos"}
  {Todos.map(Todo =>{
    return(
      <li>
      <label>
        <input type="checkbox" checked={Todo.completed} onChange={ (e) => toggleTodo(Todo.id, e.target.checked)}/>
        {Todo.title}
      </label>
      <button className="btn btn-danger" onClick={ () => deleteTodo(Todo.id)}>Delete</button>
    </li>
    )
  })}
    
  </ul>
    </>
  )
}