import styles from './today.module.css'
import Hour from './Hour'
import { useRef } from 'react';
import useDrag from './useDrag';
import { formatDate } from '../../utils';

type TodayProps = {
    time: string;
    today: any;
    tomorrow: any;
    unit: string;
}

export default function Today(props: TodayProps) {
    
    const currentHour = parseInt(props.time.slice(11,13), 10)
    const { hour: todayHours } = props.today
    const { hour: tomorrowHours } = props.tomorrow
    
    const hoursContainerRef = useRef<HTMLDivElement>(null);
    useDrag(hoursContainerRef)

    const todayHourElements = todayHours
        .filter((_data: any, index: number) => index > currentHour)
        .map((data: any, index: number) => (
            <Hour key={'today'+index} data={data} hour={data.time.slice(11,13)} unit={props.unit} />
        ))
    const tomorrowHourElements = tomorrowHours
        .filter((_data: any, index: number) => index < 24 - todayHourElements.length)
        .map((data: any, index: number) => (
            <Hour key={'tomorrow'+index} data={data} hour={data.time.slice(11,13)} unit={props.unit} />
        ))

    return (
        <div className={styles.today}>
            <div className={styles.header}>
                <span>Local Time:{props.time.slice(10)}</span>
                <span>Local Date: {formatDate(props.time.slice(0,10))}</span>
            </div>
            <div ref={hoursContainerRef} className={styles.hoursContainer}>
                {todayHourElements.concat(tomorrowHourElements)}
            </div>
        </div>
    )
}
