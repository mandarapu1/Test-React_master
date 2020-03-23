import React, { Component } from 'react';
import NavBar from './components/navbar.jsx';
import "./App.css";
import Movies from "./components/movies";
import Counters from './components/Counters';

class App extends Component {
  state = { 
    counters: [
        {id:1, value:4},
        {id:2, value:3},
        {id:3, value:0},
        {id:4, value:0}
    ]
   };
   
  handleIncrement = (x) => {
   //   console.log(x);
      const counters = [...this.state.counters];
      const index = counters.indexOf(x);
      counters[index] = {...x};
      counters[index].value++;
     // console.log(this.state.counters[0]);
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = [...this.state.counters];
      this.state.counters.map(c => { 
          c.value = 0;
          this.setState({ counters });
      });
      this.setState({ counters});
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter( c => c.id !== counterId);
      this.setState({counters});    
  }
  render() {
    return (
      <React.Fragment>
      <NavBar
        totalCounters={ this.state.counters.length }
      />
      <main className="container">
        <Counters />
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
      </main>
      </React.Fragment>
    );
           }
          }

export default App;
