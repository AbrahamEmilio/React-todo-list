import { React } from 'react'
import './Item.css'

function Item({ name, completed, key, onCompleted }){
    return(
        <>
            <li className='item' key={key}>
                <p className='doneItem' onClick={onCompleted}>V</p>
                <p>{name}</p>
                <p>{completed}</p>
                <p className='closedItem' onClick={() => {console.log('funciona')}}>X</p>
            </li>
        </>
    )
}

export { Item }