import { React, useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Item } from './components/item/Item'
import { TodoList } from './components/todoList/TodoList'

// let todos = [
//   {
//     text: 'Ir a la oficina',
//     completed: false
//   },
//   {
//     text: 'Pasear al perro',
//     completed: false
//   },
//   {
//     text: 'reparar la computadora',
//     completed: false
//   }
// ]

function App() {

  const [list, setList] = useState([]); //CREAMOS USE STATE PARA LA LISTA DE TAREAS
  const [task, setTask] = useState(''); //CREAMOS USE STATE PARA LA TAREA

  const completedTodos = list.filter((todo) => !!todo.completed === true /*El signo de admiracion doble convierte en booleanos cualquier valor*/ ) //CREAMOS LA LISTA CON LOS TODOS COMPLETADOS

  const totalTodos = list.length; //ALMACENAMOS EN VARIABLE LA CANTIDAD DE TODOS QUE ESTAN EN LA LSITA

  const searchedTodos = list.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = task.toLowerCase()

    return todoText.includes(searchText)

  })

// console.log(task)

  // const completeTodo = (text) => {
  //   const newTodos = [...list] //Creamos una copia del array con los todos
  //   const todoIndex = newTodos.findIndex((todo)=>{
  //     todo.text == text
  //   })
  //   newTodos[Index].completed = true;
  //   setList(newTodos)
  // }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Todo - List with React JS</h1>
        <p className='description'>Add a new task that you need to do.</p>
        <p className='titleList'>Haz completado {completedTodos.length} de {totalTodos}</p>
        <form className='form'>
          <Input className='input' setTask={ setTask } task={ task }/>
          < Button task={task} setList={setList} list={list} setTask={setTask} />
        </form>
        <TodoList>
          {
              searchedTodos.map((element) => {
                return <Item key={element.text} name={element.text} setList={setList} list={list} task={task}/* completed={element.completed} key={element.text} */ />  
            })
          }

        </TodoList>

      </div>
    </>
  )
}

export default App
