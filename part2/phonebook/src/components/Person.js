import React from "react";

const Person =({persons, DeleteButton})=> {
return (
<li key={persons.id}>{persons.name} {persons.number} <button onClick={DeleteButton}>Delete</button></li>
)};
export default Person