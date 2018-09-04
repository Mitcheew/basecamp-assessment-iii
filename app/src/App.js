import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Father-div">
        <p>This is inside the first div element</p>
        <div className="Nested-div">
          <p>
            This is inside the nested div element
          </p>
        </div>
        <p>Back to the first div element</p>
      </div>
    );
  }
}

export default App;
