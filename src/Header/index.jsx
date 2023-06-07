import search from '../assets/Search.png'
import cart from '../assets/Cart.png'
import logo from '../assets/MaskGroup.png'
import { useState } from 'react'
import { StyledBigDiv, StyledDivCart, StyledForm, StyledHeader, StyledImgCart } from './style'

export const Header = ({ setHandleSearch, setHandleModal, cartProducts }) => {

    const [type, setType] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setHandleSearch(type)
    }
    return (
        <StyledHeader>
            <StyledBigDiv>
                <img src={logo} alt="carrinho de compras" />
                <StyledDivCart>
                    <StyledImgCart onClick={() => {setHandleModal(true)}} src={cart} alt="carrinho de compras" />
                    <span>{cartProducts.length}</span>
                </StyledDivCart>
            </StyledBigDiv>
                <StyledForm onSubmit={submit}>
                    <input onChange={(e) => {setType(e.target.value)}} placeholder='Digitar pesquisa' type="text" />
                    <button><img src={search} alt="imagem de uma lupa" /></button>
                </StyledForm>
        </StyledHeader>
    )
}