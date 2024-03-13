import { useState } from "react"

export default function Counter() {
    const [count , setCount]= useState(0)

    const addCount= () =>{
        let newCount = count +1
        setCount(newCount)
    }
    const reduceCount= () =>{
        setCount(count-1)
    }
    return (
        <div style={{padding: '16px', border: '2px solid tomato', borderRadius: '16px', marginBottom:'24px'}}>
            <h3>Count: {count}</h3>
            <button onClick={addCount}>Add</button>
            <button onClick={reduceCount}>Reduce</button>
        </div>
    )
}