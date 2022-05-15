import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createPage from '../helpers/createPage'
import { globalState } from '../types/globalState'
import PaginationBtn from './PaginationBtn'
import arrowPrev from '../img/arrowPrev.png'
import arrowNext from '../img/arrowNext.png'
import { setCurrentPage } from '../store/actions/totalPageActions'
import Arrow from './Arrow'

const PaginationContainer: FC = () => {
   const currentPage = useSelector((state: globalState) => state.totalPageReducer.currentPage)
   const totalPages = useSelector((state: globalState) => state.totalPageReducer.totalPages)

   const page: number[] = []
   createPage(page, currentPage, totalPages)

   const dispatch = useDispatch()

   const changePage = (currentPage: number, page: number) => {
      if (currentPage !== page && page <= totalPages && page > 0) {
         dispatch(setCurrentPage(page))
      }
   }

   return (
      <div className='pagination section-margin'>
         <Arrow img={arrowPrev} changePage={() => changePage(currentPage, currentPage - 1)} textAfter='Prev' />
         <div className='pagination-page-list'>
            {
               page.map(page => <PaginationBtn page={page} currentPage={currentPage} key={page} click={changePage} />)
            }
         </div>
         <Arrow img={arrowNext} changePage={() => changePage(currentPage, currentPage + 1)} textBefore='Next' />
      </div>
   )
}

export default PaginationContainer