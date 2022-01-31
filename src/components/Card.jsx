import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
        <div className='image ma0 grow'>

                <img className="avatar" alt={props.person.name} src={props.person.imgPath} />

            <div>
                <h3>{props.person.name}</h3>
                <p>{props.person.email}</p>
            </div>
        </div>
    );
};

export default Card;
