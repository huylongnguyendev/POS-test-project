import MainScreen from "./layouts/MainScreen"
import SubScreen from "./layouts/SubScreen"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Toaster } from "sonner"

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex items-center gap-4 px-4 ">
        <MainScreen />
        <SubScreen />
      </div>
      <Toaster richColors />
    </Provider>
  )
}
