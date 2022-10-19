import React, { useCallback, useMemo, useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [score,setScore]= useState(0)
    const [count,setCount]= useState(0)
    
    const handleScore = ()=>{
        setScore(score+1)
    }
    const handleCount = ()=>{
        setCount(count+1)
        
    }
    const handleClick = ()=>{
        console.log(count)
    }
    const data = useMemo(()=>{
        return {n:"John"}
    },[])
    console.log("Parent Render",score)
  return (
    <div>
        <button onClick={handleScore}>Score</button>
        <button onClick={handleCount} className='ms-2'>Count</button>
        <Child handleClick={useCallback(handleClick,[count])} count={count} data={data}/>
    </div>
  )
}
