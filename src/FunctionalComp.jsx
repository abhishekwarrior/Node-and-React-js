import { useState } from "react";
function FunctionalComp()
{
    let [name,setName]=useState("Abhishek");
    let [marks,setMarks]=useState(89.90);
    let [course,setCourse]=useState("java")
    let [email,setEmail]=useState("abhishek@gmail.com");

    let updatename=()=>
    {
        setName("amol");
    }
    let updatemarks=()=>
    {
        setMarks(100.0);
    }
   

    return(
        <div>
            <h1>This is my functional component</h1>
            <h2>Name is {name} and Marks is {marks} course is {course} and email is {email}</h2>
            <button onClick={updatename}>update name</button>
            <button onClick={updatemarks}>update marks</button>
            <button onClick={()=>{setCourse("MS in IISC Banglore")}}>update course</button>
            <button onClick={()=>{setEmail("amol@gmail.com")}}>update email</button>
        </div>
    )
}
export default FunctionalComp;
// This function is called hook and hook is nothing but special function...
// By the using useState() we can declare variable...
// No need to use this keyword...