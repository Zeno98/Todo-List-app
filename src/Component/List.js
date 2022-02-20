import React from 'react';

function List(props){

    let [val,setVal]=React.useState();

    function handleValue(e){
        setVal(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();

        props.submits(

            
            val
        )
        }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="text"
            value={val}
            placeholder="task"
            onChange={handleValue}
            />
            <button >Add</button>
            </form>
            
            </div>
        </>

    )
}

export default List;