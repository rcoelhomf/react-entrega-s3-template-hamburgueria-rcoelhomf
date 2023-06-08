import { useEffect, useState } from 'react'
import { api } from './services/api'
import { Header } from './Components/Header'
import { GlobalStyle } from './Styles/globalStyles'
import { Reset } from './Styles/reset'
import { List } from './Components/List'
import { Modal } from './Components/Dialog'
import { StyledLoading } from './App'

function App() {

  const [handleModal, setHandleModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [handleSearch, setHandleSearch] = useState('')

  const filteredProducts = products.filter(item => item.name.toUpperCase().includes(handleSearch.toUpperCase()) || 
  item.category.toUpperCase().includes(handleSearch.toUpperCase()))
    
  useEffect(() => {
    
    setIsLoading(true)
    
    const loadData = async () => {
      try {
        const { data } = await api.get('/products')
        
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header setHandleSearch={setHandleSearch} setHandleModal={setHandleModal} cartProducts={cartProducts} />
      {isLoading ? <StyledLoading>Loading...</StyledLoading> : null}
      <List products={filteredProducts} setCartProducts={setCartProducts} cartProducts={cartProducts} />
      {handleModal ? <Modal setHandleModal={setHandleModal} cartProducts={cartProducts} setCartProducts={setCartProducts} /> : null}
    </>
  )
}

export default App
