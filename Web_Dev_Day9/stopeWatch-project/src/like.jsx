import React, { useState } from 'react'


export const Like = () => {
    const [like, setlike]=useState(0);
    function toggole(){
        // setlike(like+1)
        console.log("hello")
    }
    
  return (
    <>
    <p >plese  </p>
    <i onClick={()=>(setlike(like+1))} className="fa-regular fa-heart">{like}</i>
    </>
  )
}
