import React, {useState} from 'react';
import './App.css'
import SearchList from './components/SearchList';
import dataPersons from './data/dataPersons';


function App() {

    const [searchField, setSearchField] = useState('')

    const filteredPersons = dataPersons.filter(person =>
        person
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
        ||
        person
            .email
            .toLowerCase()
            .includes(searchField.toLowerCase())

    )

    const handleChange =(e)=>{
    setSearchField(e.target.value)
    }

  return (
    <div className="App">
        <div className="navy georgia ma0 grow">
            <h1 className="" >Search your employee</h1>
        </div>
        <input
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type='search'
            placeholder='Type here..'
            onChange={handleChange}
        />

       <SearchList filteredPersons={filteredPersons}/>
    </div>
  );
}

export default App;
