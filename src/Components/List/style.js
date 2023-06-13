import { styled } from "styled-components";

export const StyledList = styled.ul`
    width: 100vw;
    height: 100%;
    padding: 30px 10vw;
    gap: 40px;

    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;

    overflow-x: auto;

    @media (min-width: 769px) {
        flex-wrap: wrap;
    }

    li {
        min-width: 300px;
        height: 346px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        border: 2px solid var(--color-grey-100);
        border-radius: 5px;

        @media (min-width: 769px) {
            width: 21%;
        }
    }
    
    li:hover {
        border: 2px solid var(--color-color-primary);
    } 
`

export const ImgDiv = styled.div`
    width: 100%;
    min-height: 145px;
    
    display: flex;
    justify-content: center;
    align-items: end;

    background-color: #F5F5F5;
    
    overflow: hidden;
`

export const BottonDiv = styled.div`
    width: 100%;
    height: max-content;
    padding: 20px;
    gap: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    button {
        align-self: start;

        height: 40px;
        padding: 0 15px;

        background-color: var(--color-grey-100);
        border-radius: 8px;
        color: #FFFFFF;

        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-color-primary);
    }
`