import Today from './today/Today';
import Current from './current/Current';
import styles from './weather.module.css'
import Forecast from './forecast/Forecast';

type WeatherProps = {
    weatherLoading: boolean;
    weatherData: any;
    unit: string;
}

export default function Weather(props: WeatherProps) {

    return (
        <div className={styles.weatherContainer}>
            {props.weatherLoading
                ? <div className={styles.loader}></div>
                : <div className={styles.weather}>
                    <h1 className={styles.title}>{props.weatherData.location.name}</h1>
                    <Current data={props.weatherData.current} unit={props.unit} />
                    <Today time={props.weatherData.location.localtime} today={props.weatherData.forecast.forecastday[0]} tomorrow={props.weatherData.forecast.forecastday[1]} unit={props.unit} />
                    <Forecast data={props.weatherData.forecast.forecastday} unit={props.unit} />
                    <div className={styles.poweredby}>
                        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target='_blank'>WeatherAPI.com</a>
                        <div>Background designed by <a href="https://www.freepik.com/" target='_blank'>starline / Freepik</a></div>
                    </div>
                </div>}
        </div>
    )
}