import styles from '../pages/Products.module.css'
import { createQueryObject } from '../helpers/helpers';


const categories = [
    { id:2, type: 'Electronics'},
    { id:3, type: 'Jewelery'},
    { id:4, type: "Men's Clothing"},
    { id:5, type: "Women's Clothing"},
]
const orders = [
  {id:1, type:"Newest"},
  {id:2, type:"Expensive"},
  {id:3, type:"Cheapest"}
]

//___________________________________________________________________
function SideBar({ query, setQuery }) {

    //-----------------events-----------------------------------------
    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== 'LI') return;
        setQuery((query) => createQueryObject(query, {category}))
    }
    const orderHandler = (event) =>{
      const {tagName} = event.target;
      const order = event.target.innerText.toLowerCase();
      if (tagName !== 'LI') return;
      setQuery((query) => createQueryObject(query, {order}))
    }

//____________________________html_____________________________________
  return (
    <div className={styles.categories}>
      <div>
      <span>Categories</span>
      <ul onClick={categoryHandler}>
        <li>All</li>
          {categories.map(category =>(
              <li key={category.id} className={query.category === category.type.toLowerCase() ? styles.selected : null}>
                  {category.type}
              </li>
          ))}
      </ul>
      </div>
      <div>
        <span>Order By</span>
        <ul onClick={orderHandler}>
          {orders.map(order => <li key={order.id} className={query.order === order.type.toLowerCase() ? styles.selected : null}>{order.type}</li>)}
        </ul>
    </div>
  </div>
  )
}

export default SideBar