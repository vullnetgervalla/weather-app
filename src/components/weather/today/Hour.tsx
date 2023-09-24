import styles from './today.module.css'

type HourProps = {
    data: any;
    hour: number;
    unit: string;
}

export default function Hour(props: HourProps) {
    const {data, hour, unit} = props
    const {temp_c, temp_f, condition} = data
    const {icon, text } = condition

    return (
        <div className={styles.hourContainer}>
            <div className={styles.hour}>{hour.toString().padStart(2, '0')}</div>
            <img className={styles.hourIcon} src={icon} alt='weather-icon' draggable='false' />
            <div className={styles.hourText}>{text}</div>
            <div className={styles.hourTemperature}>{unit==='celsius' ? temp_c + '°C  ': temp_f + '°F'}</div>
        </div>
    )
}
