import React,{Component} from 'react';
class GoogleMaps extends Component
{
    componentDidMount(){
        new  window.google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render()
    {
        return <div ref="maps"></div>
    }
}
export default GoogleMaps;