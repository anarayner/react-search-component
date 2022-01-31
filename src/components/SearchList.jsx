import React from 'react';
import Card from './Card';

const SearchList = ({filteredPersons}) => {

    const data = filteredPersons.map(person => <Card key={person.id} person={person} />)


    return (
        <div>
            <div className='image-container '>
                {data}
            </div>
        </div>
    );
};

export default SearchList;
