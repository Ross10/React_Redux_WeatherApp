import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {


    renderWeather(cityData) {
        console.log("cityData",cityData)
        const cidyId = cityData.city.id;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressuers = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        

        console.log("temps",temps)
    
        return(
            <tr key={cidyId}>
               <td>{cityData.city.name}</td> 
               <td>
                  <Chart data={temps} color= "orange" />
               </td>

                <td>
                  <Chart data={pressuers} color= "blue" />
                </td>

                <td>
                  <Chart data={humidities} color= "black" />
                </td>
            </tr>
        );

    }

    render() {
        return(

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>            
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);