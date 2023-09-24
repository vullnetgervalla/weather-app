import styles from './forecast.module.css'

type DayProps = {
    day: any;
    date: string;
    index: number;
    unit: string;
}

export default function Day(props: DayProps) {
    const { day, index, date, unit } = props

    const getDayOfWeek = (date: string) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = new Date(date).getDay();
        return daysOfWeek[dayIndex];
    }

    return (
        <div className={styles.day}>
            <span className={styles.dateText}>{index === 0 ? 'Today' : getDayOfWeek(date)}</span>
            <img className={styles.icon} src={day.condition.icon} />
            <span className={styles.weatherText}>{day.condition.text}</span>
            <span>{unit === 'celsius' ? day.avgtemp_c + '°C  ' : day.avgtemp_f + '°F'}</span>
            <span>{unit === 'celsius' ? day.mintemp_c + '°C' : day.mintemp_f + '°F'}</span>
            <span>{unit === 'celsius' ? day.maxtemp_c + '°C' : day.maxtemp_f + '°F'}</span>
        </div>
    )
}