import { React, useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Item } from './components/item/Item'
import { TodoList } from './components/todoList/TodoList'

const todos = [
  {
    text: 'Ir a la oficina',
    completed: true
  },
  {
    text: 'Pasear al perro',
    completed: true
  },
  {
    text: 'reparar la computadora',
    completed: false
  }
]

function App() {

  const [list, setList] = useState(todos); //CREAMOS USE STATE PARA LA LISTA DE TAREAS
  const [task, setTask] = useState(''); //CREAMOS USE STATE PARA LA TAREA

  const completedTodos = list.filter((todo) => !!todo.completed === true /*El signo de admiracion doble convierte en booleanos cualquier valor*/ ) //CREAMOS LA LISTA CON LOS TODOS COMPLETADOS

  const totalTodos = list.length; //ALMACENAMOS EN VARIABLE LA CANTIDAD DE TODOS QUE ESTAN EN LA LSITA


  const searchedTodos = list.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = task.toLowerCase()

    return todoText.includes(searchText)

  })

// console.log(task)

  const completeTodo = (text) => {

    const newTodos = [...list]; //Los tres puntos nos ayudan a clonar el array que esta en list

    const index = newTodos.findIndex((todo) => { //El mentodo finIndex nos retornara el indice donde esta el elemento que le hicimos la validacion
      todo.text === text;

    })

    newTodos[index].completed = true;

    setList(newTodos)

    // console.log('se completo la tarea')
  
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>TODO LIST</h1>
        <p className='titleList'>Haz completado {completedTodos.length} de {totalTodos}</p>
        <form className='input'>
          <Input setTask={ setTask } task={ task }/>
          < Button task={ task} setList={setList} />
        </form>

        <TodoList>

          {

              searchedTodos.map((element) => {

              return <Item
              
                // onCompleted={

                // () => {

                //   return completeTodo(element.todo)

                //   }}
                
                name={element.text}
                setList={setList}
                
                //completed={element.completed} key={element.text}
                
              />
                
            })

          }

        </TodoList>

      </div>
    </>
  )
}

export default App
