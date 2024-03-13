import { useState } from "react"

export default function Team(){

    const [count,setcout] =useState(0)

    const handelAdd=()=>{
        const newCount=count+1
        setcout(newCount)
    }
    function handelReduis(){
        const nweCount=count-1
        setcout(nweCount)
    }
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    
    return (
        <div style={teamStyle}>
            <h3>Player: {count}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduis}>Reduis</button>
        </div>
    )
}