import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Munna" job="Footballer"></Person>
        <Person name="Masud" job="Dorshok"></Person>
      </header>
    </div>
  );
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
