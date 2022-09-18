import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())  
    .then(data => {
      setCountries(data);
      // console.log(data);
      // const output = data.map(country => country.name.common);
      // console.log(output);     
    })
    .catch(err => { console.log(err); });
  },[])


  const [cart, SetCart] = useState([]);
  const handleAddCountry = (country) => { 
      console.log('country added', country);
      const newCart = [...cart,  country];
      SetCart(newCart);
  }

  return (
    
    <div className="App">
      <h2>Country: {countries.length}</h2>
      <h2>total country:{cart.length}</h2>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.name.common}></Country>)
          
        }
      
        
       

    
    </div>
  );
}

export default App;
