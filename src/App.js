import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import MyPerson from './Person/Person.js';


//Class method 

class App extends Component {

  state = {
    veggies: [
      { name: 'pepper', color: 'red', price: '2.49' },
      { name: 'cabbage', color: 'purple', price: '3.99' },
      { name: 'chilli', color: 'green', price: '7.99' },
    ],
    OtherState: 'Some other value'
  }

  switchHandler = (newColor) => {
    this.setState(
      {
        veggies: [
          { name: 'pepper', color: newColor, price: '2.49' },
          { name: 'cabbage', color: 'purple', price: '3.99' },
          { name: 'chilli', color: 'green', price: '7.99' },
        ]
      }
    );
  }

  priceChangeHandler = (event) => {
    this.setState({
      veggies: [
        { name: 'pepper', color: 'green', price: event.target.value },
        { name: 'cabbage', color: 'purple', price: event.target.value },
        { name: 'chilli', color: 'green', price: '7.99' },
      ]
    }
    );
  }

  render() {
    return (
      <div className='App'>
        <h1>Order Grocery App</h1>
        <p>For additional questions please call 519-591-7448</p>
        <MyPerson color={this.state.veggies[0].color}
          name={this.state.veggies[0].name}
          price={this.state.veggies[0].price}
          changed={this.priceChangeHandler}
        >
        </MyPerson>
        <MyPerson color={this.state.veggies[1].color}
          name={this.state.veggies[1].name}
          price={this.state.veggies[1].price}
          click={this.switchHandler.bind(this, 'green')}
//          changed={this.priceChangeHandler}
          >
        </MyPerson>
        <MyPerson color={this.state.veggies[2].color}
          name={this.state.veggies[2].name}
          price={this.state.veggies[2].price}
          >
        </MyPerson>
        <button onClick={this.switchHandler.bind(this, 'orange')}>Change Veggie</button>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is another react app'));
  }
}

/*
//Function method

const App = (props) => {
  const [veggieList, setVeggies] = useState({
    veggies: [
      { name: 'pepper', color: 'green' },
      { name: 'cabbage', color: 'purple' },
      { name: 'chilli', color: 'green' },
    ]
  });

  const [otherState, setOtherState] = useState({ OtherState: 'Some other value' });

  const switchOtherState = () => {
    setOtherState(
      { OtherState: 'New velue for other state' }
    );
  }

  const switchVeggies = () => {
    setVeggies(
      {
        veggies: [
          { name: 'pepper', color: 'red' },
          { name: 'cabbage', color: 'purple' },
          { name: 'chilli', color: 'green' },
        ]
      }
    );
  }

  return (
    <div className='App'>
      <h1>Order Grocery App</h1>
      <p>For additional questions please call 519-591-7448</p>
      <MyPerson
        color={veggieList.veggies[0].color}
        name={veggieList.veggies[0].name}>Price : 2.0 CAD/Kg</MyPerson>
      <MyPerson
        color={veggieList.veggies[1].color}
        name={veggieList.veggies[1].name}
        click={switchVeggies}>Price : 3.0 CAD/Kg</MyPerson>
      <MyPerson
        color={veggieList.veggies[2].color}
        name={veggieList.veggies[2].name}>Price : 7.0 CAD/Kg</MyPerson>
      <p>{otherState.OtherState}</p>
      <button onClick={switchVeggies}>Change Veggie</button>
      <button onClick={switchOtherState}>Change OtherState</button>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is another react app'));
}
*/
export default App;
