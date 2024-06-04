import { React } from 'react'
import './Item.css'
import check from '../../assets/check.png'
import cross from '../../assets/cross.png'

function Item({ name, key, setList, list}){

        let arrayNuevo = [...list];

        const taskD = arrayNuevo.findIndex((todo)=>{
            return todo.text == name;
        })

        function itemFinished(){
            arrayNuevo[taskD].completed = true;
            setList(arrayNuevo)
        }

        function deletedItem(){
            arrayNuevo.splice(taskD, 1)
            setList(arrayNuevo)
        }

    return(
        <>
            <li className='item' key={key}>
                <div className='itemContainer'>
                    <div className='checkContainer' onClick={() => {
                        itemFinished()
                    }}>
                        <img className='check' src={check} alt="" />
                    </div>
                    <div className={list[taskD].completed ? 'nameCompleted' : 'nameIncompleted'}>
                        <p className='name'>{name}</p>
                    </div>
                    <div className='crossContainer' onClick={()=>{
                        deletedItem()
                    }}>
                        <img className='cross' src={cross} alt="" />
                    </div>
                </div>
            </li>
        </>
    )
}

export { Item }