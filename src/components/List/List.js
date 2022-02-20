import React from 'react';
import './List.css'
import TodoList from '../TodoList/TodoList';

function List(props){

    let [input,setInput]=React.useState('');

    let[items,setItems]=React.useState([]);

    let handleChange=(e)=>{
        setInput(e.target.value);
    }

    let addItems=()=>{
        if(input.length>0){
            setItems([...items,input])
        }
    setInput('');
    }

    let removeAll=()=>{
        setItems([]);
    }

    let removeItem=(selectedItem)=>{
        console.log('delete');

       setItems(items.filter((ele,index)=>{
            return selectedItem!==index;
        })
       )
    }

    
    console.log(items)

    return (
        <>
        <h1>Todo List</h1>
        <input
        placeholder="task"
        value={input}
        onChange={handleChange}
        />
        <button onClick={addItems}>Add</button>
        <button onClick={removeAll}>Remove all</button>
        <ol>
            {items.map((element,index)=>{
                return(
                    <li>
                    <TodoList
                     element={element} 
                     key={index}
                     id={index}
                     onSelect={removeItem}
                     />
                    </li>
                )
            })}
            </ol>
        </>
    )
}

export default List;