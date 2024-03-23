import { shortenText } from "../helpers/helpers";
//-------------------icons-----------------------
import { BsTrash3Fill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
//--------------------css-------------------------
import styles from './BasketCard.module.css';
import { decrease, increase, removeItem } from "../features/cart/cardSlice";
//________________________________________________
function BasketCard({data, clickHandler}) {


  return (
    <div className={styles.card}>
        <div className={styles.cardImage}><img src={data.image} /></div>
        <p>{shortenText(data.title)}</p>
        <div className={styles.buttonCard}>
            {data.quantity === 1 &&<button onClick={() => clickHandler(removeItem(data))} ><BsTrash3Fill /></button>}
            {data.quantity > 1 &&<button onClick={() => clickHandler(decrease(data))}><IoIosRemoveCircle /></button>}
            {data.quantity >= 1 && <p>{data.quantity}</p>}
            {data.quantity >= 1 &&<button onClick={() => clickHandler(increase(data))}><MdAddCircle /></button>}
        </div>
    </div>
  )
}

export default BasketCard