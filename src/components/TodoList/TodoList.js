import React from "react";

function TodoList(props){

    return (
    <>
       {props.element}
       <button 
       onClick={
           ()=>{
               props.onSelect(props.id)
           }
           }>X</button>
    </>
    )
}

export default TodoList;