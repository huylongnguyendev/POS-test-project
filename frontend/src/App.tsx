import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from "./pages/MainScreen"
import SubScreen from "./pages/SubScreen"

export default function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/sub" element={<SubScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
