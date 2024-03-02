import styled from "styled-components";

export const CalculationComponent = styled.section`
    width: 100%;
    height: 39.4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(282deg, #5F4E6A 0%, #8963A7 100%);
    
    @media screen and (max-width: 992px) {
        height: 150vw;
    }

    @media screen and (max-width: 576px) {
        height: 170vw;
    }

    @media screen and (max-width: 380px) {
        height: 280vw;
    }
`

export const CalculationContainer = styled.div`
    width: 75vw;
    height: 29vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--xl-pipe-white, #FFF);
    box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 992px) {
        width: 70vw;
        height: 130vw;
        flex-direction: column;
    }

    @media screen and (max-width: 576px) {
        height: 160vw;
        width: 95vw;
    }

    @media screen and (max-width: 380px) {
        height: 270vw;
        width: 95vw;
    }
`