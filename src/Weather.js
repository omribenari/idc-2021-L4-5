import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: this.props.name || 'New York',
            weather: {}
        };
    }

    componentDidMount(){
        const name = this.state.name;
        const key = 'af4bef339069f117d3aafbea2cb7e7c5';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`;
        axios.get(url)
  .then( response => {
      if(response && response.data && response.status === 200 ){
          this.setState({
        weather: response.data
      })
      }
      
  });
    }

    render() {
        const {name, weather} = this.state;
        return <div>
            <h1>{this.state.name}</h1>
            {weather.main && 
            (<div><div>{weather.main.temp}</div>
            <div>{weather.weather[0].main}</div>
            <div>Fills like {weather.main.feels_like}</div>
            </div>)}
            
            </div>;
    }
}

export default Weather;