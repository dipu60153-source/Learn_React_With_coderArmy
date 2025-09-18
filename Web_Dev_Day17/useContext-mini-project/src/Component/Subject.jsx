// import "./App.css";
import { useContext } from 'react';
import ContextHandle from './contextAPI';

function Subjects() {
     const subject =useContext(ContextHandle)
  return (
    <>
   
      <div style={{backgroundColor:"pink", padding:10}}>
        <h1>Subject : {subject}</h1>
      </div>
    </>
  );
}

export default Subjects;
