import { useEffect, useState } from "react"

export default function User(){
    const [user,setuser] =useState([])

    // useEffect(async()=>{
    //     const res=await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data=await res.json()
    //     console.log(data);
    // },[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res =>res.json())
         .then(data => setuser(data))
    },[])
    return(
        <div>
            <h3>Users: {user.length}</h3>
        </div>
    )
}