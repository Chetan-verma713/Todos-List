import React, { useState } from 'react';
import './todolist.css';
import Todos from './Todos';


export default function Todolist(props) {
    return (
        props.listItems.length > 0 ?
            props.listItems.map((item, i) => {
                return <Todos item={item} key={i} removeItem={props.removeItem} index={i} />
            }) :
            <h1 className='mt-5  no-item d-flex justify-content-center align-item-center' style={{color:"black"}}>No Task in Todos.</h1>
    );
}

