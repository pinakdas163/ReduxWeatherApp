import axios from 'axios';
const API_KEY='82db7afac59307c8db42dc19c7ad2da1';
const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchweather(city) {
  const url=ROOT_URL+'&q='+city+',us';
  const request=axios.get(url);
  //console.log('promise request', request);
  return {
      type:FETCH_WEATHER,
      payload:request
    };
}
