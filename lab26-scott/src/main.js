import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

//create the App component where everything will go.

class App extends React.Component{
  //start the constructor and pass through props, props is the element properties
  constructor(props){
    //superprops allows us to manage state
    super(props);
    //create a state object for state instances
    this.state = {
      cowsay: '',
    }
  };

  //handler method for the click action on button
  handleButtonClick(e){
    //set the state every time the button is clicked
    this.setState(state => {
      return {
        cowsay: cowsay.say({
          text: faker.lorem.words(10),
        }) 
      };
    });
  };

  //what I want to be rendered on the DOM
  render(){
  //always wrap it in a div
    return (
    <div>
      <h1>Generate Cowsay Lorem</h1>
      <button onClick={this.handleButtonClick}>click me</button>
    </div>
    );
  };
};

//use render method on reactdom to render the DOM
ReactDOM.render(<App />, document.getElementById('root'));
