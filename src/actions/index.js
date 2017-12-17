import axios from 'axios';

const API_KEY = '0f924c527ead6e184b157f76442ec9f0';
const ROOTURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//The above is like to write : 'http://http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    console.log( 'ROOT URL is : ',`${ROOTURL}`);
    const url = `${ROOTURL}&q=${city},us`;
    const request = axios.get(url);

    console.log("requst  is : ", request);
    return {
         type: FETCH_WEATHER,
         payload: request
    };
}