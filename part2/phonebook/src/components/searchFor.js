  
  const searchFor = (newSearch, persons) => {
    if (!newSearch) {
      return persons;
    }
    return persons.filter(people => people.name.toLowerCase().includes(newSearch.toLowerCase()))
  }

  export default searchFor;