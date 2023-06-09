import thrash from '../../assets/thrash.png'

import { useRef, useEffect } from 'react'
import { BackgorundModal, BottonModalDiv, ModalBox, ModalButton, ModalUl, UlLi, UpperDiv } from './style'
import { StyledBodySec, StyledH3 } from '../../Styles/Typography'

export const Modal = ({ setHandleModal, cartProducts, setCartProducts }) => {

    const allValues = cartProducts.map(item => +item.price)
    
    const total = allValues.reduce((counter, item) => counter + item, 0)
    
    const filterArray = (itemId) => {
        setCartProducts((cartProducts) => cartProducts.filter(item => item.id !== itemId))
    }
    
    const modalRef = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            if(!modalRef.current.contains(e.target)){
                setHandleModal(false)
            }
        }

        window.addEventListener('mousedown', handleClick)

        return () => {
            window.removeEventListener('mousedown', handleClick)
        }
    }, [])

    useEffect(() => {
        const handleKey = (e) => {
            if(e.key === 'Escape'){
                setHandleModal(false)
            }
        }

        window.addEventListener('keydown', handleKey)
        
        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [])

    return (
        <BackgorundModal>
            <ModalBox ref={modalRef}>
                <UpperDiv>
                    <StyledH3 font='#FFFFFF'>Carrinho de compras</StyledH3>
                    <span onClick={() => {setHandleModal(false)}}>X</span>
                </UpperDiv>
                <ModalUl>
                    {cartProducts.map(item => (
                        <UlLi key={item.id}>
                            <div>
                                <img src={item.img} alt='' />
                                <StyledH3>{item.name}</StyledH3>
                            </div>
                            <img onClick={() => {filterArray(item.id)}} src={thrash} alt='' />
                        </UlLi>
                    ))}
                </ModalUl>
                <BottonModalDiv>
                    <StyledBodySec font='var(--color-grey-600)'>Total</StyledBodySec>
                    <StyledBodySec font='var(--color-grey-300)'>{total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</StyledBodySec>
                </BottonModalDiv>
                <ModalButton onClick={() => {setCartProducts([])}}>Remover todos</ModalButton>
            </ModalBox>
        </BackgorundModal>
    )
}