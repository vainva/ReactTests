import React, { Component } from 'react';
import './App.css';

class Weather extends Component {
  constructor(props) {
    super(props);
        this.state={
        weather: "",
        temperature: "",
        icon: ""
        };
    }
    
  componentDidMount(){
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=38388df529ef73c3377ed58363e7ee39')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
            weather: responseData.weather[0].main,
            temperature: responseData.main.temp,
            icon: 'http://openweathermap.org/img/w/' + responseData.weather[0].icon + '.png'
            
            
            });
          });
        }
          render() {
            return (
              <table>
              <div >
                <br/>
                <div>Weather: {this.state.weather}</div>
                <div>Temperature: {this.state.temperature - 273.15} Celsius</div>
                <div><img src= {this.state.icon} alt="error"/></div>
              </div>
              </table>
          );
        
    }
}
export default Weather;