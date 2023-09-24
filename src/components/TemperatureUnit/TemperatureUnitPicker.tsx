import styles from './unit.module.css'

type UnitProps = {
    unit: string;
    setUnit: React.Dispatch<React.SetStateAction<string>>;
}

export default function TemperatureUnitPicker(props: UnitProps) {
    const { unit, setUnit } = props

    return (
        <div className={styles.container}>
            <div className={styles.temperatureUnitPicker}>
                <div className={styles.unitToggle}>
                    <input
                        type="radio"
                        id="celsius"
                        name="unit"
                        value="celsius"
                        checked={unit === 'celsius'}
                        onChange={e => setUnit(e.target.value)}
                    />
                    <label htmlFor="celsius">C</label>
                </div>
                <div className={styles.unitToggle}>
                    <input
                        type="radio"
                        id="fahrenheit"
                        name="unit"
                        value="fahrenheit"
                        checked={unit === 'fahrenheit'}
                        onChange={e => setUnit(e.target.value)}
                    />
                    <label htmlFor="fahrenheit">F</label>
                </div>
            </div>
        </div>
    )
}