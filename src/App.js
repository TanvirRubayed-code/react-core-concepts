import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$50.00'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <Person name="Munna" job="Footballer"></Person>
        <Person name="Masud" job="Dorshok"></Person>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>
    setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count-1)}> Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(Props){
  let personStyle={
    border: '5px solid red',
    margin: "10px"
  }
  return (
    <div style={personStyle}>
      <h3>My name: {Props.name}</h3>
      <p>My Profession is {Props.job}</p>
    </div>
  )
}
export default App;
