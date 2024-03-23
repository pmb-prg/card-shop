import { MdPriceChange } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
//------------------------css------------------------------
import styles from './BasketSidbar.module.css'
import { checkouted } from "../features/cart/cardSlice";

function BasketSidbar({quantity, total, clickHandler}) {
  return (
    <div className={styles.sider}>
        <p><span><MdPriceChange /> Total: </span>${total}</p>
        <p><span><FaHashtag /> Quantity: </span>{quantity}</p>
        <p><span><BsFillPatchCheckFill /> Status: </span>pending...</p>
        <button onClick={() => clickHandler(checkouted())}>Checkout</button>
    </div>
  )
}

export default BasketSidbar