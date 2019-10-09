import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({ monsters: data });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}
