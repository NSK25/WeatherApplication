import React,{Component } from 'react';
import { connect} from 'react-redux';
import Chart from '../components/chart'

class weatherList extends Component
{   renderWeather(cityData)
    {
        const temps=cityData.list.map(weather=>weather.main.temp);
        const pressures=cityData.list.map(weather=>weather.main.pressure);
        const humidity=cityData.list.map(weather=>weather.main.humidity);
        // const lon=cityData.city.coord.lon;
        // const lat=cityData.city.coord.lat;

        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>

            <td><Chart data={temps} color="orange"/></td>
            <td> <Chart data={pressures} color="blue"/></td>
            <td><Chart data={humidity} color="red"/></td>
            </tr>
            )
    }

    render(){
        return(
        <table className="table table-hover">
            <thead>
            <tr>
            <th>City</th>
                <th>Temparature</th>
                <th>pressure</th>
                <th>humidity</th>
            </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        );

    }
}
function mapStateToProps(state)
{
    return {weather: state.weather};
}
export default connect(mapStateToProps)(weatherList);