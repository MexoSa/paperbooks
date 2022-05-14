import React, { FC } from 'react'

type ArrowProps = {
   img: string,
   changePage: () => void,
   text?: string,
}

const Arrow: FC<ArrowProps> = ({ img, changePage, text }): React.ReactElement => {
   return (
      <button className='arrow-btn' onClick={changePage}>{text === 'Next' ? text : ''}<img src={img} alt='arrow' />{text === 'Prev' ? text : ''}</button>
   )
}

export default Arrow