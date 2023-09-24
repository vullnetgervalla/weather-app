import { useState } from 'react'
import styles from './search.module.css'
import SearchBar from './SearchBar'
import CityList from './CityList';


type SearchProps = {
    displayCities: boolean;
    updateDisplayCities: (value: boolean) => void;
    updateDisplayWeather: (value: boolean) => void;
    callWeatherApi: (name: string) => void;
}

type City = {
    name: string;
    country: string;
};

export type Status = {
    searched: boolean;
    loading: boolean;
    error: boolean;
}

export default function Search(props: SearchProps) {

    const [cities, setCities] = useState<City[]>([])
    const [status, setStatus] = useState<Status>({
        searched: false,
        loading: false,
        error: false
    })


    const handleSubmit = async (name: string) => {
        if (!name) {
            return
        }

        props.updateDisplayWeather(false)
        props.updateDisplayCities(true)
        setStatus({ error: false, loading: true, searched: true })

        const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${name}`)
        if (!response.ok) {
            console.error("Error fetching names data")
            setStatus(prev => ({ ...prev, error: true }))
            return
        }
        const data = await response.json()
        const cities = data.map((city: any) => ({
            name: city?.name || '',
            country: city?.country || ''
        }))

        setCities(cities)

        if (data) {
            setStatus(prev => ({ ...prev, loading: false }))
        }
    }

    const list = cities?.map((item, index) => <li onClick={() => props.callWeatherApi(item?.name)} key={index}>{item?.name}, {item?.country}</li>)

    return (
        <div className={styles.searchContainer}>
            <SearchBar onSubmit={(name) => handleSubmit(name)} />
            {props.displayCities && <CityList status={status} list={list} />}
        </div>
    )
}
