
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
//--------------------components--------------------------
import BasketSidbar from "../components/BasketSidbar";
import BasketCard from '../components/BasketCard';
//--------------------css---------------------------------
import styles from './CheckoutPage.module.css';
//-------------------icons--------------------------------
import { MdHeartBroken } from "react-icons/md";
import { useTitle } from '../hooks/TitleComponent';
//________________________________________________________
function CheckoutPage() {
//-------------------custum hook--------------------------
  useTitle("🛒CheckOut");
//---------------------state------------------------------
  // const [state, dispatch] = useCard();
  const state = useSelector(state => state.card);
  const dispatch = useDispatch();
  

//----------------------event-----------------------------
  // const clickHandler = (type, data) => {
  //   dispatch({type, payload: data});
  // }

//---------------------empity checkout-------------------
  if(!state.selectedItems.length) return <div className={styles.container2}><h2><MdHeartBroken />
  Empity</h2> <Link to={'/products'}>Go To The Store</Link></div>
//---------------------full checkout---------------------
  return (
    <div className={styles.container}>
      <BasketSidbar total={state.total} quantity={state.itemsCounter} clickHandler={dispatch} />
      <div className={styles.cards}>
        {state.selectedItems.map(item => <BasketCard key={item.id} data={item} clickHandler={dispatch} />)}
      </div>
    </div>
  )
}

export default CheckoutPage