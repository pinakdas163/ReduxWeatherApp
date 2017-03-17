import React, { Component } from 'react';
import Input from '../containers/input';
import WeatherList from '../containers/weatherlist';

export default class App extends Component {
  render() {
    return (
      <div><Input />
      <WeatherList />
      </div>
    );
  }
}
