import { useState, useEffect } from 'react'
import Person from './components/Person'
import searchFor from './components/searchFor'
import PersonForm from './components/PersonForm'
import axios from 'axios';
import listings from './services/listings';





const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newSearch, setSearch] = useState('')

  useEffect(() => {
    listings.getAll()
      .then(response => {
        setPersons(response)
      }
      )
  }, [])

  const DeleteButton = (id) => {
    const FilteredPerson = persons.find(n => n.id === id)

    if (window.confirm(`Do you really want to delete ${FilteredPerson.name}?`)) {
      listings.deletePerson(id).then(response => {
        console.log(response.length);
        setPersons(persons.filter(n => n.id !== id))
        setSearch('');
      }).catch(error => {
        alert(
          `the person named '${FilteredPerson.name}' was already deleted from server`
        )
        setPersons(persons.filter(n => n.id !== id))
      })
    }
  }

  const addPerson = (event) => {
    const KeySet = persons.length + 1;
    const personObject = {
      name: newName,
      number: newNum,
      id: KeySet
    }

    if (persons.find(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const NameId = persons.find(person => person.name ===newName)
        listings
        .update(NameId.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNum('')
        })
    }}

    if (!persons.find(person => person.name === newName)) {
      event.preventDefault()
      listings
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNum('')
        })
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
        {console.log(`${searchResults.length} this is the length of the searchResults array`)}
        {searchResults.map(person =>
          <Person key={person.id} persons={person} DeleteButton={() => DeleteButton(person.id)} />)}
      </ul>
    </div>

  )
}

export default App