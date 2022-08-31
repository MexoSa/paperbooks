import React, { FC } from 'react'

type PaginationBtnProps = {
  page: number,
  currentPage: number,
  click: (currentPage: number, page: number) => void,
}

const PaginationBtn: FC<PaginationBtnProps> = ({ page, currentPage, click }) => {
  return (
    <button className={`page-button ${currentPage === page ? 'active' : ''}`} onClick={() => click(currentPage, page)} >
      {
        page
      }
    </button>
  )
}

export default PaginationBtn