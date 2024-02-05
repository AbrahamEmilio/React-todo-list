import { React } from 'react'

function Item({ name, completed, key }){
    return(
        <>
            <li key={key}>
                <p>{name}</p>
                <p>{completed}</p>
            </li>
        </>
    )
}

export { Item }