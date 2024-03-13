import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends(){

    const [friends,setfriends]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setfriends(data))
    },[])

    return(
        <div className='Friends'>
            <h3>
                Friends: {friends.length}
                {
                    friends.map(friend=> <Friend Friend={friend}></Friend>)
                }
            </h3>
        </div>
    )
}