import React, { KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getBooks } from '../store/actions/booksActions';
import { clearSearchValueActions, searchBookActions } from '../store/actions/searchBookAction';
import { clearTotalCount } from '../store/actions/totalPageActions';
import emptyCart from '../img/emptyCart.png';
import profile from '../img/profile.png';
import { globalState } from '../types/globalState';
import { CartItem } from '../types/cartState';
import cartWithProducts from '../img/cartWithProducts.png';

function NavBar(): React.ReactElement {
   const [searchValue, setSearchValue] = useState<string>('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const cartList: CartItem[] = useSelector((state: globalState) => state.cartReducer.cartList)

   const searchBook = (e: KeyboardEvent<HTMLInputElement>) => {
      if (searchValue.trim().length > 0 && e.key === 'Enter') {
         dispatch(searchBookActions(searchValue.trim()));
         setSearchValue('');
         navigate('/');
      }
   }

   function handleClick() {
      dispatch(getBooks());
      dispatch(clearSearchValueActions());
      dispatch(clearTotalCount())
   }

   return (
      <header className='header'>
         <Link className='title' to='/' onClick={handleClick}>Paper books</Link>
         <input className='input' type='text' placeholder='Search IT Books' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={e => searchBook(e)} />
         <div className='burger-menu'>
            <Link to={'cart'}><img src={cartList.length > 0 ? cartWithProducts : emptyCart} alt='cart' /></Link>
            <Link to={'profile'}><img src={profile} alt='cart' /></Link>
         </div>
      </header>
   )
}

export default NavBar