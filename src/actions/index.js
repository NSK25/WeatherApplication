import axios from 'axios';
 const key='c2c052e86ba94767eb20e371ae488105';
 const root_url=`http://api.openweathermap.org/data/2.5/forecast?appid=${key}`;

export const FetchWeather="FetchWeather"
 export function fetchWeather(city) {
const url=`${root_url}&q=${city},us`;
const request=axios.get(url,{ crossdomain: true });

//console.log(request);
    return {
      type: FetchWeather,
        payload:request

    };

}