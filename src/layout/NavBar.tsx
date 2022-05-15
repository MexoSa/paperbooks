import React, { FC, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearSearchValueActions } from '../store/actions/searchBookAction'
import { clearTotalCount } from '../store/actions/totalPageActions'
import emptyCart from '../img/emptyCart.png'
import profile from '../img/profile.png'
import { globalState } from '../types/globalState'
import cartWithProducts from '../img/cartWithProducts.png'
import search from '../img/search.svg'

const NavBar: FC = () => {
   const [searchValue, setSearchValue] = useState<string>('')
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const cartList = useSelector((state: globalState) => state.cartReducer.cartList)

   const searchBook = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (searchValue.trim().length > 0) {
         setSearchValue('')
         navigate(`/search/${searchValue}`)
      }
   }

   const goHome = () => {
      dispatch(clearSearchValueActions())
      dispatch(clearTotalCount())
      navigate('/')
   }

   const changeSearchValue = (e: FormEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value.trim())
   }

   return (
      <div className='header'>
         <Link className='title' to='/' onClick={goHome}>Paper books</Link>
         <form className='header-form' onSubmit={e => searchBook(e)}>
            <input className='input' type='text' placeholder='Search IT Books' value={searchValue} onChange={e => changeSearchValue(e)} />
            <button className='form-button' type="submit"><img src={search} alt="search-icon" /></button>
         </form>
         <div className='burger-menu'>
            <Link to='cart'><img src={cartList.length > 0 ? cartWithProducts : emptyCart} alt='cart' /></Link>
            <Link to='profile'><img src={profile} alt='cart' /></Link>
         </div>
      </div>
   )
}

export default NavBar