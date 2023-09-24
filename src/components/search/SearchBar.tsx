import { useState } from 'react';
import styles from './search.module.css'
import SearchIcon from '../../assets/images/search.svg'

type SearchBarProps = {
    onSubmit: (name: string) => void
}

export default function SearchBar(props: SearchBarProps) {

    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <form onSubmit={(e) => { e.preventDefault(); props.onSubmit(searchValue) }} className={styles.search}>
            <input type="text" className={styles.searchInput} value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Type your city" />
            <button type='submit' className={styles.searchButton}>
                <img src={SearchIcon} alt='search' />
            </button>
        </form>
    )
}