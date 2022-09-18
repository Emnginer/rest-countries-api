import React from 'react';

const Country = (props) => {
    // console.log(props.country);
    // you can also do it with destructuring ///
    return (
        <div style={{border: '1px solid black', width:'200px', margin:'0 auto',marginBottom: '10px'}}>
            <h4>This is: {props.country.name.common}</h4>
            <img style={{height:'100px'}} src={props.country.flags.png} alt="" />
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <button  onClick={() => props.handleAddCountry(props.country)}>Add</button>
        </div>
    );
};

export default Country;