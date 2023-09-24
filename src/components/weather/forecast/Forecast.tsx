import styles from './forecast.module.css'
import Day from './Day'

type ForecastProps = {
    data: any;
    unit: string;
}

export default function Forecast(props: ForecastProps) {
    const { data, unit } = props

    const days = data.map((day: any, index: number) => (
        <Day key={index} day={day.day} date={day.date} index={index} unit={unit} />
    ))
    return (
        <div className={styles.forecastContainer}>
            <div className={styles.header}>10 Day Forecast</div>
            <div className={styles.forecast}>
                <div className={`${styles.day} ${styles.dayHeader}`}>
                    <span>Day</span>
                    <img className={styles.fillerImg} />
                    <span>Condition</span>
                    <span>Average</span>
                    <span>Low</span>
                    <span>High</span>
                </div>
                {days}
            </div>
        </div>
    )
}