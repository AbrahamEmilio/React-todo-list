import { React, useState } from 'react'
import './Button.css'

function Button ({ task, setTask, list }){
    return(
        <>
            <button className='button' onClick={(e) => {
                e.preventDefault();

                list.push({
                    text: task,
                    completed: false
                })

                setTask('');

            }}>Add Task</button>
        </>
    )
}

export { Button }