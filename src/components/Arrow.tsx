import React, { FC } from 'react'

type ArrowProps = {
   img: string,
   changePage: () => void,
   textBefore?: string,
   textAfter?: string,
}

const Arrow: FC<ArrowProps> = ({ img, changePage, textBefore, textAfter }) => {
   return (
      <button className='arrow-btn' onClick={changePage}>{textBefore}<img src={img} alt='arrow' />{textAfter}</button>
   )
}

export default Arrow