import styles from './current.module.css'


type CurrentProps = {
    data: any;
    unit: string;
}

export default function Current(props: CurrentProps) {
    const { temp_c, condition, temp_f } = props.data;
    const { icon, text } = condition
    return (
        <div className={styles.current}>
            <div className={styles.image}>
                <img src={icon} alt='weather-icon' />
            </div>
            <div className={styles.content}>
                <div className={styles.temperature}>
                    {props.unit === 'celsius' ? temp_c : temp_f}{props.unit === 'celsius' ? <span>&deg;C</span> : <span>&deg;F</span>}
                </div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    )
}