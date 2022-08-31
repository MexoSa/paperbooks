import React, { FC, FormEvent, useState } from 'react'
import search from '../img/search.svg'
import { http } from '../helpers/http'
import { Iresponse } from '../types/Iresponse'
import { Ibook } from '../types/Ibook'
import { useNavigate } from 'react-router-dom'
import SearchTipList from './SearchTipList'

const SearchForm: FC = () => {
  const [searchTipList, SetSearchTipList] = useState<Ibook[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const navigate = useNavigate()

  const searchBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchValue.trim().length > 0) {
      setSearchValue('')
      navigate(`/paperbooks/search/${searchValue.trim()}`)
    }
  }

  const changeSearchValue = async (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
    if (e.currentTarget.value.trim().length > 3) {
      const res = await http<Iresponse>(`https://api.itbook.store/1.0/search/${e.currentTarget.value.trim()}`)
      SetSearchTipList(res.books.length > 0 ? res.books : [{ title: 'not found' }])
    } else {
      SetSearchTipList([])
    }
  }


  window.addEventListener('click', () => {
    if (searchTipList.length > 0) {
      SetSearchTipList([])
    }
  })

  return (
    <form className='header-form' onSubmit={e => searchBook(e)}>
      <input className='input' required type='text' autoComplete='off' placeholder='Search IT Books' value={searchValue} onChange={e => changeSearchValue(e)} />
      <button className='form-button' type="submit"><img src={search} alt="search-icon" /></button>
      {searchTipList.length > 0 && <SearchTipList searchTipList={searchTipList} />}
    </form>
  )
}

export default SearchForm