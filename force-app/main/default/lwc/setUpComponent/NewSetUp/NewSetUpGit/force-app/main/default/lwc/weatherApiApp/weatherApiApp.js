import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherApiController.getWeather';

export default class WeatherApiApp extends LightningElement {
city;
weatherIcon;
weatherText;
    handleCity(event){
this.city = event.target.value;

    }
    handleWeather(){
        getWeatherData({city:this.city})
.then(response=>{
    let weaterParseData = JSON.parse(response);
    this.weatherIcon = 'https:'+weaterParseData.current.condition.icon;
    console.log(this.weatherIcon);
    this.weatherText = weaterParseData.current.condition.text;
    })
    .catch(error=>{
        this.weatherText = 'No Matching location ';
        console.error('----error--->',JSON.stringify(error));
    })
    }
}