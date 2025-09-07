import React, { useContext } from 'react'
import { First } from './First'
import GlobalContext from './Global'

export const Increment = () => {
  const {count,setCount}=useContext(GlobalContext);
  return (
    <div>
        <h2> Child Counter is: {count}</h2>
        <button onClick={()=>setCount(count+1)} >Increment</button>
        <First/>
    </div>
  )
}
