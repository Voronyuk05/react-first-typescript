import { useApp } from "../hooks/useApp"
import { MainPage } from "./MainPage/MainPage"
import { AboutUsPage } from "./AboutUsPage/AboutUsPage"


export const App = () => {
  const {appPage} = useApp()

  if (appPage === 'Main') {
    return (
      <>
        <MainPage />
      </>
    )
  } else if (appPage === 'AboutUs') {
    return (
      <>
        <AboutUsPage />
      </>
    )
  } else {
    return (
      <>
        <h1>Error</h1>
      </>
    )
  }
}
