import { styled } from "styled-components"

export const BackgorundModal = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.3);
`

export const ModalBox = styled.div`
    width: 90%;
    max-width: 500px;
    height: 400px;
    background-color: #FFFFFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    overflow: hidden;
`

export const UpperDiv = styled.div`
    width: 100%;
    min-height: 55px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-color-primary);

    span {
        color: #FFFFFF50;
        cursor: pointer;
    }
`

export const ModalUl = styled.ul`
    width: 90%;
    height: 180px;
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    border-bottom: 2px solid var(--color-grey-100);

    overflow-y: auto;
`

export const UlLi = styled.li`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;

    & > img {
        width: 18px;
        height: 18px;

        cursor: pointer;
    }

    div {
        width: 50%;
        display: flex;
        gap: 20px;
    }

    div > img {
        background-color: var(--color-grey-100);
        border-radius: 5px;
    }
`

export const BottonModalDiv = styled.div`
    width: 100%;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
`

export const ModalButton = styled.button`
    width: 90%;
    padding: 20px 0;

    align-self: center;
    background-color: var(--color-grey-100);
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-grey-300);
    border-radius: 8px;

    cursor: pointer;
    
    &:hover {
        background-color: var(--color-grey-300);
        color: var(--color-grey-100); 
    }
`