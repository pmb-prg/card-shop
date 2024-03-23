import React from 'react'

function FilterData({products, setOrder}) {

    const filterHandler = (type) => {
        switch(type){
          case "NEW":
            return setOrder(products)
          case "CHEAP":
            return       setOrder(products.sort((a, b) => a.price - b.price))
          case "EXPENSIVE":
            return       setOrder(products.sort((a, b) => a.price + b.price))
        }
      }
  return (
    <div>
        <p>Order By</p>
        <ul>
            <li onClick={() => filterHandler('NEW')}>Newest</li>
            <button onClick={() => filterHandler('CHEAP')}>Expensive</button>
            <li onClick={() => filterHandler('EXPENSIVE')}>Cheapest</li>
        </ul>
    </div>
  )
}

export default FilterData