import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearSearchValueActions } from '../store/actions/searchBookAction'
import { clearTotalCount } from '../store/actions/totalPageActions'

type GoHomeProps = {
  text: string
}

const GoHome: FC<GoHomeProps> = ({ text }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goHome = () => {
    dispatch(clearSearchValueActions())
    dispatch(clearTotalCount())
    navigate('/paperbooks/')
  }

  return (
    <div className='not-founded'>
      <p>{text}</p>
      <button className='button' onClick={goHome}>Go Home</button>
    </div>
  )
}

export default GoHome