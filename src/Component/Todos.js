import React from 'react';

export default function Todos(props) {
    return (
        <div className="todos ">
            <div className="task">
                <h3 className='ms-2 mt-1'>{props.item.task} <span>{props.item.time}</span> </h3>
            </div>
            <button type="button" className="btn btn-outline-danger" onClick={()=> {
                props.removeItem(props.index)
            }} >Delete</button>
        </div>
    )
}
