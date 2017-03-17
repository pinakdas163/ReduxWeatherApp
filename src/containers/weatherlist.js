import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component{
 weatherData(cityData) {
   const temps= cityData.list.map(weather => weather.main.temp);
   const pressures=cityData.list.map(weather => weather.main.pressure);
   const humidities=cityData.list.map(weather => weather.main.humidity);
   const { lon, lat }=cityData.city.coord;
   //console.log(temps);
   return (
     <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="blue" units="HPA"/>
        </td>
        <td>
          <Chart data={humidities} color="green" units="%"/>
        </td>
     </tr>
   );
 }
  render() {
    return (
      <table className='table table-hover' style={{marginTop:1+'em'}}>
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (K)</th>
            <th> Pressure (HPA)</th>
            <th> Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
         {this.props.cityWeather.map(this.weatherData)}
        </tbody>
      </table>
    );
  }
}

// function mapToProps(state) {
//   return {
//     cityWeather:cityWeather
//   };
// }

function mapToProps({cityWeather}) {
  return {
    cityWeather
  };
}

export default connect(mapToProps)(WeatherList);
