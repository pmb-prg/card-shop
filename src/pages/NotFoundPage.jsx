import { BiSolidMessageSquareError } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h2>Not Found Page <BiSolidMessageSquareError /></h2>
      <Link to={'/products'}>Go Back To The Store</Link>
    </div>
  )
}

export default NotFoundPage