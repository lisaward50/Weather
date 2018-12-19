import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 0,
      description: 0,
      temp: 0,
      pressure: 0,
      humidity: 0,
      min: 0,
      max: 0,
      windSpeed: 0,
      iconUrl: "",
    }
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather() {
    const api_key = '12345678901234567890123456789012';
    //note fake example api key above needs to be replaced with one from open weather to work
    const zip = '10014';
    const api_end = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${api_key}`;
    const response = await axios.get(api_end);
    console.log(response);

    const data = response.data;
    const main = data.main;
    const weather = data.weather[0];

    const name = data.name;
    const temp = main.temp;
    const pressure = main.pressure;
    const humidity = main.humidity;
    const min = main.temp_min;
    const max = main.temp_max;
    const windSpeed = data.wind.speed;
    const description = weather.description;
    const icon = weather.icon;
    const iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    //console.log(description);

    this.setState({
      name: name,
      description: description,
      temp: temp,
      pressure: pressure,
      humidity: humidity,
      min: min,
      max: max,
      windSpeed: windSpeed,
      iconUrl: iconUrl,
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render(){
    const { name, description, temp, pressure, humidity, min, max, windSpeed, iconUrl } = this.state;
    //console.log(description);

    return(
      <div className="Weather">
       <h1>{ name }</h1>
       <h3>{ description }</h3>
       <img src={ iconUrl } />
       <h3>{ temp }</h3>
       <h3>{ min }</h3>
       <h3>{ max }</h3>
       <h3>{ pressure }</h3>
       <h3>{ humidity }</h3>
       <h3>{ windSpeed }</h3>
      </div>
    )
  }
}

export default Weather;
