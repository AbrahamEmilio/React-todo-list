import { React } from 'react'
import './Input.css'

function Input ({ setTask, task }){

    console.log(task)
    return(
        <>
            <input
            className='input'
            placeholder='Ingresa una tarea'
            value={task}
            onChange={(e) => {setTask(e.target.value)}}
            />
        </>
    )
}

export { Input }