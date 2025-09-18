// import { Class } from './../../node_modules/acorn/dist/acorn.d';
import Student from "./student";

function Class() {
  return (
    <>
      <div style={{ backgroundColor: "green", padding: 10 }}>
        <h1>Class Component</h1>
        <Student />
      </div>
    </>
  );
}

export default Class;
