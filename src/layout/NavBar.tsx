import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearSearchValueActions } from '../store/actions/searchBookAction'
import { clearTotalCount } from '../store/actions/totalPageActions'
import emptyCart from '../img/emptyCart.png'
import { globalState } from '../types/globalState'
import cartWithProducts from '../img/cartWithProducts.png'
import SearchForm from '../components/SearchForm'

const NavBar: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartList = useSelector((state: globalState) => state.cartReducer.cartList)

  const goHome = () => {
    dispatch(clearSearchValueActions())
    dispatch(clearTotalCount())
    // navigate('paperbooks/')
  }

  return (
    <div className='header'>
      <Link className='title' to='/paperbooks' onClick={goHome}>Paper books</Link>
      <SearchForm />
      <div className='burger-menu'>
        <Link to='/paperbooks/cart'><img src={cartList.length > 0 ? cartWithProducts : emptyCart} alt='cart' /></Link>
      </div>
    </div>
  )
}

export default NavBar