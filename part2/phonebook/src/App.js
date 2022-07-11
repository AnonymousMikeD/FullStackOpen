import { useState } from 'react'
import Person from './components/Person'
import searchFor from './components/searchFor'
import PersonForm from './components/PersonForm'





const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '123-456-7890'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newSearch, setSearch] = useState('')

  const addPerson = (event) => {
    if (!(persons.find(person => person.name === newName))) {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNum,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
    }
    else {
      alert(`${newName} is already added`)
    }
  }
  const searchResults = searchFor(newSearch, persons);
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  function handleNameChange(event) {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  function handleNumChange(event) {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (

    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input type={"text"} onChange={handleSearchChange} /></div>
      <h3>add a new</h3>


      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNum} onChange={handleNumChange} /></div>

        <div>
          <button type="submit">add</button>
        </div>
      </form >

      <h2>Numbers</h2>
      <ul>
        {searchResults.map(person =>
          <Person key={person.id} persons={person} />
        )}
      </ul>
    </div>

  )
}

export default App