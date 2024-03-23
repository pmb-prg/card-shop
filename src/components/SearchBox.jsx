import styles from '../pages/Products.module.css'
import { createQueryObject } from '../helpers/helpers';
import { FaSearch } from "react-icons/fa";


function SearchBox({search, setSearch, setQuery}) {

  const searchHandler = () =>{
    setQuery(query => createQueryObject(query, {search}))
  }

  return (
    <div className={styles.searchBox}>
    <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
    <button onClick={searchHandler}><FaSearch /> </button>
  </div>
  )
}

export default SearchBox