import { React, useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Item } from './components/item/Item'
import { TodoList } from './components/todoList/TodoList'

const todos = [
  {
    text: 'Ir a la oficina', completed: false
  },
  {
    text: 'Pasear al perro', completed: false
  },
  {
    text: 'reparar la computadora', completed: false
  }
]

function App() {

  const [list, setList] = useState(todos);
  const [task, setTask] = useState('');

  const completedTodos = list.filter((todo) => { return todo.completed })
  const totalTodos = list.length;
  const searchedTodos = list.filter((todo) => { return todo.text.toLowerCase().includes(task.toLowerCase())})

  return (
    <>
      <div className='container'>
        <h1 className='title'>TODO LIST</h1>
        <p className='titleList'>Haz completado {completedTodos.length} de {totalTodos}</p>
        <Input setTask={ setTask } task={ task }/>
        < Button task={ task } />
        <TodoList>
          {searchedTodos.map((element) => {return <Item name={element.text} completed={element.completed} key={element.text}/>})}
        </TodoList>
      </div>
    </>
  )
}

export default App
