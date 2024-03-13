import { useState } from "react"

export default function Count(){
    const [count,setcout]=useState(0)
    const handalAdd=()=>{
        const newCount=count+1
        setcout(newCount)
    }
    const handalRedus=()=>{
        const newCount=count-1
        setcout(newCount)

    }
    return(
        <div>
            <h3>count: {count}</h3>
            <button onClick={handalAdd}>Add</button>
            <button onClick={handalRedus}>redus</button>
        </div>
    )
}