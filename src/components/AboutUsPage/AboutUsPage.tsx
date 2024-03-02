import { Header } from "./Header/Header"
import { AboutUsMain } from "./AboutUsMain/AboutUsMain"
import { Сomparison } from './Сomparison/Сomparison'
import { Details } from "./Details/Details"
import { Advantages } from "./Advantages/Advantages"
import { Gifts } from "./Gifts/Gifts"
import { Questions } from "./Questions/Questions"
import { Footer } from "../Footer/Footer"

interface IPageProps {
    changePage: Function
}
  

export const AboutUsPage: React.FC<IPageProps> = ({changePage}): JSX.Element => {
    return (
        <>
            <Header changePage={changePage} />
            <main>
                <AboutUsMain />
                <Сomparison />
                <Details />
                <Advantages />
                <Gifts />
                <Questions />
            </main>
            <Footer />
        </>
    )
}