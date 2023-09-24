import { useState } from 'react'
import './App.css'
import Search from './components/search/Search'
import Weather from './components/weather/Weather';
import TemperatureUnitPicker from './components/TemperatureUnit/TemperatureUnitPicker';

type WeatherStatus = {
    displayCities: boolean;
    displayWeather: boolean;
    weatherLoading: boolean;
}

const forecastDays = 10

function App() {
    const [unit, setUnit] = useState<string>('celsius')
    const [WeatherStatus, setWeatherStatus] = useState<WeatherStatus>({
        displayCities: true,
        displayWeather: false,
        weatherLoading: false,
    })
    const [weatherData, setWeatherData] = useState({})

    const updateStatus = (field: string, value: boolean) => {
        setWeatherStatus(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const callWeatherApi = async (name: string) => {
        if (!name) {
            return
        }

        setWeatherStatus({
            displayCities: false,
            displayWeather: true,
            weatherLoading: true,
        })

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${name}&days=${forecastDays}`)
        if (!response.ok) {
            console.error("Error fetching weather data")
            return
        }
        const data = await response.json()
        setWeatherData(data)

        if (data) {
            updateStatus('weatherLoading', false)
        }
    }

    return (
        <div className='page-container'>
            <TemperatureUnitPicker unit={unit} setUnit={setUnit} />
            <Search
                displayCities={WeatherStatus.displayCities}
                updateDisplayWeather={(value) => updateStatus('displayWeather', value)}
                updateDisplayCities={(value) => updateStatus('displayCities', value)}
                callWeatherApi={(name) => callWeatherApi(name)} />
            {WeatherStatus.displayWeather && <Weather weatherLoading={WeatherStatus.weatherLoading} weatherData={weatherData} unit={unit} />}
        </div>
    )
}

export default App
