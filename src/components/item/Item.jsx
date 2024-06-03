import { React } from 'react'
import './Item.css'
import check from '../../assets/check.png'
import cross from '../../assets/cross.png'

function Item({ name, key, setList }){
    return(
        <>
            <li className='item' key={key}>
                {/* <p className='doneItem' onClick={onCompleted}>V</p>
                <p>{name}</p>
                <p>{completed}</p>
                <p className='closedItem' onClick={() => {console.log('funciona')}}>X</p> */}
                <div className='itemContainer'>
                    <div className='checkContainer' onClick={() => {
                        console.log('completed')
                    }}>
                        <img className='check' src={check} alt="" />
                    </div>
                    <div className='nameContainer'>
                        <p className='name'>{name}</p>
                    </div>
                    <div className='crossContainer' onClick={()=>{
                        setList.remove
                    }}>
                        <img className='cross' src={cross} alt="" />
                    </div>
                </div>
            </li>
        </>
    )
}

export { Item }