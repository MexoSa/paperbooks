import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../store/actions/booksActions';
import { clearSearchValueActions } from '../store/actions/searchBookAction';

type GoHomeProps = {
   text: string
}

function GoHome({ text }: GoHomeProps): React.ReactElement {

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const goHome = () => {
      dispatch(getBooks());
      dispatch(clearSearchValueActions());
      navigate('/')
   }

   return (
      <div className='not-founded'>
         <p>{text}</p>
         <button className='button' onClick={goHome}>Go Home</button>
      </div>
   )
}

export default GoHome