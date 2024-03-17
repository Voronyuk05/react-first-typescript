import { MainPage } from "./MainPage/MainPage"
import { AboutUsPage } from "./AboutUsPage/AboutUsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react-first-typescript/" element={<MainPage/>}/>
          <Route path="react-first-typescript/about" element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
