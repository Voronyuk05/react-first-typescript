import { Footer } from "../Footer/Footer"
import { Advantages } from "./Advantages/Advantages"
import { Calculation } from "./Calculation/Calculation"
import { Catalogue } from "./Catalogue/Catalogue"
import { Charter } from "./Charter/Charter"
import { Header } from "./Header/Header"
import { HeroMain } from "./HeroMain/HeroMain"
import { Objects } from "./Objects/Objects"
import { Product } from "./Product/Product"
import { Statistics } from "./Statistics/Statistics"
import { Steps } from "./Steps/Steps"
import { Termoregulation } from "./Termoregulation/Termoregulation"
import { TopBar } from "./TopBar/TopBar"



export const MainPage: React.FC = (): JSX.Element => {
    
    return (
        <>
            <TopBar />
            <Header />
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