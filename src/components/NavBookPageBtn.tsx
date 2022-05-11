import React from 'react'

type NavBookPageBtnProps = {
   page: number,
   currentPage: number,
   click: (currentPage: number, page: number) => void,
}


function NavBookPageBtn({ page, currentPage, click }: NavBookPageBtnProps) {
   return (
      <button className={`page-button ${currentPage === page ? 'active' : ''}`} onClick={() => click(currentPage, page)} >
         {
            page
         }
      </button>
   )
}

export default NavBookPageBtn