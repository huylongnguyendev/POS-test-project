import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { SearchIcon } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { setSearch } from "../../store/slices/filter.slice"

export default function SearchBar() {
  const search = useAppSelector((state) => state.filter.search)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState<string>(search)

  useEffect(() => {
    dispatch(setSearch(value))
  }, [value, dispatch])

  return (
    <>
      <div className="relative">
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
          <SearchIcon className="size-4" />
          <span className="sr-only">Search</span>
        </div>
        <Input
          // id={id}
          type="search"
          placeholder="Search..."
          value={value}
          onChange={e => setValue(e.target.value)}
          className="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
        />
      </div>
    </>
  )
}
