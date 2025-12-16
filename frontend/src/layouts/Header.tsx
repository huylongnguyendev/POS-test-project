import CartBtn from "../components/cart/CartBtn"
import SearchBar from "../components/search/SearchBar"

export default function Header() {
  return (
    <>
      <header className="fixed w-full p-4 bg-background z-50 flex justify-between items-center">
        <h1 className="text-lg font-semibold">POS - Fashion</h1>
        <SearchBar />
        <CartBtn />
      </header>
    </>
  )
}
