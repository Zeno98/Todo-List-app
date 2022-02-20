import React from "react";
import List from './List';

function Display(){

    // let [item,setItem]=React.useState();

    const [newItem,setNewItem]=React.useState([]);
    

    let addTodo=(item)=>{
        const items=[item,...newItem]
        setNewItem(items)
        console.log(...newItem)
    }


    return(
        <>

        <List submits={addTodo}/>

        </>
    )
}

export default Display;