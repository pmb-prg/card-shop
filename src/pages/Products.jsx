//---------------components--------------------------
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
//--------------hooks---------------------------------
import { useEffect, useState } from "react";
import { filterProducts, getInitialQuery, orderProducts, searchProducts } from "../helpers/helpers";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
//---------------styles-------------------------------
import styles from './Products.module.css';
import { useTitle } from "../hooks/TitleComponent";

//----------------loading-----------------------------
import Spinner from "../components/Spinner";

//________________________________________________________________
function Products() {

  //-------------------custum hook--------------------------
  useTitle("🏪Products Page");
  //------------datas---------------------------------
  const {products} = useSelector(state => state.products);
  const {loading} = useSelector(state => state.products);
  const dispatch = useDispatch();
  //-------------states-------------------------------
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  //--------------useEffects---------------------------
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  useEffect(()=>{
    setData(products)
    setQuery(getInitialQuery(searchParams));
  },[products])

  useEffect(() => {
    setSearch(query.search || '')
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    finalProducts = orderProducts(finalProducts, query.order);
    setData(finalProducts);
    setSearchParams(query)
  }, [query])
  useEffect(() => {
  })



//___________________________html___________________________________________
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
          <div className={!products.length || !data.length  ? styles.products2 : styles.products}>
          {/* {loading && <Spinner/>} */}
            {data && !loading ? data.map(data => 
              <Card key={data.id} data={data} />
              ) : <Spinner/>}
              {products.length && !data.length && <h2>Products Not Founded</h2>}
          </div>
              <SideBar query={query} setQuery={setQuery} />
        </div>
    </>
  )
}

export default Products