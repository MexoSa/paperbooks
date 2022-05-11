import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import createPage from '../helpers/createPage';
import { globalState } from '../types/globalState';
import NavBookPageBtn from './NavBookPageBtn';
import arrowPrev from '../img/arrow-prev.png';
import arrowNext from '../img/arrow-next.png';
import { setCurrentPage } from '../store/actions/totalPageActions';
import Arrow from './Arrow';

function NavBookPageContainer() {
   const currentPage: number = useSelector((state: globalState) => state.totalPageReducer.currentPage)
   const totalPages: number = useSelector((state: globalState) => state.totalPageReducer.totalPages)

   const page: number[] = [];
   createPage(page, currentPage, totalPages);

   const dispatch = useDispatch();

   const changePage = (currentPage: number, page: number) => {
      console.log(currentPage, page);
      if (currentPage !== page && page <= totalPages && page > 0) {
         dispatch(setCurrentPage(page))
      }
   }

   return (
      <div className='pagination'>
         <Arrow img={arrowPrev} changePage={() => changePage(currentPage, currentPage - 1)} text={'Prev'} />
         <div className='pagination-page-list'>
            {
               page.map(page => <NavBookPageBtn page={page} currentPage={currentPage} key={page} click={changePage} />)
            }
         </div>
         <Arrow img={arrowNext} changePage={() => changePage(currentPage, currentPage + 1)} text={'Next'} />
      </div>
   )
}

export default NavBookPageContainer