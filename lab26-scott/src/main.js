import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

//create the App component where everything will go.

class App extends React.Component{
  //what I want to be rendered on the DOM
  render(){
  //always wrap it in a div
    return (
    <div>
      <h1>hello world</h1>
    </div>
    );
  };
};

//use render method on reactdom to render the DOM
ReactDOM.render(<App />, document.getElementById('root'));
