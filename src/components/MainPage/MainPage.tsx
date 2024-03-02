import { Header } from "./Header/Header"
import { TopBar } from "./TopBar/TopBar"
import { HeroMain } from "./HeroMain/HeroMain"
import { Charter } from "./Charter/Charter"
import { Advantages } from "./Advantages/Advantages"
import { Catalogue } from "./Catalogue/Catalogue"
import { Steps } from "./Steps/Steps"
import { Termoregulation } from "./Termoregulation/Termoregulation"
import { Statistics } from "./Statistics/Statistics"
import { Objects } from "./Objects/Objects"
import { Calculation } from "./Calculation/Calculation"
import { Product } from "./Product/Product"
import { Footer } from "../Footer/Footer"

interface IPageProps {
  changePage: Function
}

export const MainPage: React.FC<IPageProps> = ({changePage}): JSX.Element => {
    return (
        <>
            <TopBar />
            <Header changePage={changePage} />
            <main>
                <HeroMain />
                <Charter />
                <Advantages />
                <Catalogue />
                <Steps />
                <Termoregulation />
                <Statistics />
                <Objects />
                <Calculation />
                <Product />
            </main>
            <Footer />
        </>
    )
}