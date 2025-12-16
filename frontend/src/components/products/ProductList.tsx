import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { fetchAllProducts } from "../../lib/services/product.service"
import ProductItem from "./ProductItem"


export default function ProductList() {
  const { search } = useAppSelector((state) => state.filter)
  const products = useAppSelector((state) => state.product.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    try {
      dispatch(fetchAllProducts({ searchFilter: search })).unwrap()
    } catch (error) {
      console.log(error)
    }
  }, [search, dispatch])

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          products.map(product => (
            <ProductItem key={product.id} item={product} />
          ))
        }
      </ul>
    </>
  )
}
