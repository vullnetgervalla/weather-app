import styles from './search.module.css'
import { Status } from './Search'

type CityListProps = {
    list: React.ReactNode[];
    status: Status;
}

export default function CityList(props: CityListProps) {
    const { status, list } = props

    let cityList: React.ReactNode

    if (status.error) {
        cityList = <div className={styles.error}>Error!</div>
    }
    else if (status.loading) {
        cityList = <div className={styles.loader}></div>
    }
    else if (list.length === 0 && status.searched) {
        cityList = <div className={styles.notFound}>Not found!</div>
    }
    else {
        cityList = <ul className={styles.list}>
            {list}
        </ul>
    }

    return (cityList)
}