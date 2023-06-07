import { BottonDiv, ImgDiv, StyledLi, StyledList } from "./style"
import { StyledBodySec, StyledCaption, StyledH3 } from '../Styles/Typography'

export const List = ({ products, setCartProducts, cartProducts }) => {

    const addToCart = (itemList) => {
        const newProduct = products.find(item => item.id == itemList.id)
        const findOnCart = cartProducts.find(item => item.id == itemList.id)
        if(!findOnCart){
            setCartProducts((cartProducts) => [...cartProducts, newProduct])
        } else {
            alert('Esse produto já foi adicionado no carrinho')
        }
    }

    return (
        <StyledList>
            {products.map(item => (
                <StyledLi key={item.id}>
                    <ImgDiv>
                        <img src={item.img} alt="" /> 
                    </ImgDiv>
                    <BottonDiv>
                        <StyledH3 font='var(--color-grey-600)'>{item.name}</StyledH3>
                        <StyledCaption font='var(--color-grey-300)'>{item.category}</StyledCaption>
                        <StyledBodySec font='var(--color-color-primary)'>{item.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</StyledBodySec>
                        <button onClick={(e) => {addToCart(e.target)}} id={item.id}>Adicionar</button>
                    </BottonDiv>
                </StyledLi>
            ))}
        </StyledList>
    )
}