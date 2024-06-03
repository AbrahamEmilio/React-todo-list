import { React, useState } from 'react'
import './Button.css'

function Button ({ task, setList }){
    return(
        <>
            <button className='button' onClick={() => {
                setList(task)
            }}>Add Task</button>
        </>
    )
}
export { Button }