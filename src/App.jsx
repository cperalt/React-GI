import { useState , Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const colors = [
    'red',
    'blue',
    'green',
  
  ]

  const people = [
    {
        Name: "Queen",
        Number: "453-267-4634",
        DOB: "45-25-75",
        Country: "Spain"
    },
    {
        Name: "Rebeca",
        Number: "232-343-6546",
        DOB: "33-45-34",
        Country: "France"

    },
    {
        Name: "Jack",
        Number: "765-324-6346",
        DOB: "35-75-23",
        Country: "United Kingdom"
    },
    {
        Name: "Steph",
        Number: "543-626-6456",
        DOB: "35-35-86",
        Country: "Poland"
    },
    {
        Name: "Luke",
        Number: "544-545-2323",
        DOB: "32-54-23",
        Country: "Pluto"
    }
    
  ]


  function BasicInfo({ person }) {
    return (
      <div className='p-card'>
        <h2>Name: {person.Name}</h2>
        <h2>Number: {person.Number}</h2>
        <h2>Date of Birth: {person.DOB}</h2>
        <h2>Country: {person.Country}</h2>
      </div>
    );
  }

  class Person extends Component { 
    
    constructor(props) { 
    
      // Calling super class constructor 
      super(props); 
        
      // Creating state 
      this.state = { 
        person: {
          Name: "Hughie",
          Number: "287-343-5343",
          DOB: "05-24-97",
          Country: "United States"
        },
        people: people
      } 
        
    } 
    
    render() { 
      return ( 
        <div className='container' > 
          {/* <h2>Name: {this.state.person.Name}</h2>
          <h2>Number: {this.state.person.Number}</h2>
          <h2>DoB: {this.state.person.DOB}</h2>
          <h2>Country: {this.state.person.Country}</h2> */}
          <BasicInfo person={this.state.person}/>
          {people.map(person => (<BasicInfo person={person} />))}
        </div> 
      ); 
    } 
  } 

  return (
    <>
      <h1>Welcome to my first react page</h1>
      <h2>Below are some counters to test state:</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button>
          count is {count}
        </button>
        <br />
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>
      <h2>An array of colors each mapped to a button</h2>
      <div>
        { colors.map( color => (
        <button style={{ backgroundColor: color, margin: 20}}>{`${color}`}</button>
        ) ) }
      </div>
      <h1>Challenges:</h1>

      {/* <div className="card">
          <h2>Name: Hughie</h2>
          <h2>Number: 287-343-5343</h2>
          <h2>DoB: 05-24-97</h2>
          <h2>Country: United States</h2>
      </div> */}
      <Person />
    </>
  )

}

export default App
