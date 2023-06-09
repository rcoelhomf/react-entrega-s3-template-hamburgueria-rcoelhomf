import { styled } from "styled-components";

export const StyledHeader = styled.header`
    width: 100vw;
    height: 160px; 
    padding: 0 10vw;
    padding-bottom: 10px;
    gap: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: #F5F5F5;
    
    @media (min-width: 535px) {
        height: 80px;
        flex-direction: row;
    }
`

export const StyledBigDiv = styled.div`
    width: 100%;

    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    gap: 15px;
`

export const StyledDivCart = styled.div`
    height: 58px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    span {
        width: 20px;
        height: 22px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 600;

        position: absolute;
        top: 0;
        right: 0;

        border-radius: 7px;

        background-color: var(--color-color-primary);
        color: #FFFFFF;
    }
`

export const StyledImgCart = styled.img`
    cursor: pointer;
`

export const StyledForm = styled.form`
    position: relative;

    width: 100%;

    display: flex;
    justify-content: end;

    @media (min-width: 535px) {
        width: 365px;
    }

    input {
        width: 100%;
        max-width: 365px;
        height: 55px;
        padding-left: 20px;

        border: 2px solid var(--color-grey-100);
        border-radius: 8px;
    }
    
    input:focus {
        border: 2px solid var(--color-grey-600);
    }

    input:focus::placeholder {
        color: transparent;
    }

    button {
        position: absolute;
        top: 6px;
        right: 8px;
        
        background-color: var(--color-color-primary);
        border-radius: 8px;
        padding: 12px 16px;
        
        cursor: pointer;
    }

    button:hover {
    background-color: #27ae6080;
    }
`