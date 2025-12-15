import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { fetchAllProducts } from "../../lib/services/product.service"


export default function ProductList() {

  const products = useAppSelector((state) => state.product.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
      try {
        dispatch(fetchAllProducts()).unwrap()
      } catch (error) {
        console.log(error)
      }
  }, [dispatch])

  console.log(products)

  return (
    <>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              {product.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}
