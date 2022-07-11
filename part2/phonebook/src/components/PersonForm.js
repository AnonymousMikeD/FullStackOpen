import React from "react";


const PersonForm =(newName, newNum, setNewName, setNewNum, addPerson) =>{
    
return (
    <form onSubmit={addPerson}>
        <div>name: <input  onChange={(e)=>setNewName(e.target.value)} value={newName.newName}/></div>
        <div>number: <input  onChange={(e)=>setNewNum(e.target.value)} value={newNum.newNum}/></div>

        <div>
            <button type="submit">add</button>
        </div>
    </form>)};
export default PersonForm;