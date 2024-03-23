import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import styles from './Layout.module.css'
import { useSelector } from 'react-redux';

function Layout({children}) {
    const state = useSelector(state => state.card)

  return (
    <div className={styles.container}>
        <header>
            <h2>MaxMall</h2>
            <Link to={"/checkout"}><FaBasketShopping /> <span>{state.itemsCounter}</span></Link>
        </header>
        {children}
        <footer>Developed By PMBPG With ❤️</footer>
    </div>
  )
}

export default Layout