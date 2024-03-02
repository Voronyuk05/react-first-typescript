import styled from "styled-components";

export const Moving = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
        min-width: 16vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 380px) {
        button {
            min-width: 8vw;

    }
    }
    
`