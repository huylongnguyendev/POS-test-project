import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { ASppDispatch, RootState } from "../../store/store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => ASppDispatch = useDispatch