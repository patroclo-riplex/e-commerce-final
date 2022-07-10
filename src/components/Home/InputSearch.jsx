import React from 'react'
import { useForm } from 'react-hook-form'


const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <><div className="search-container">
    <form onSubmit={handleSubmit(submit)} className='form-search'>
      <input type="text" placeholder="What are you looking for?" {...register('searchText')} />
      <button>Search</button>
    </form><div className="filter-button-container">
                    <button 
                        className='filter-button'
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                            <i className="fa-solid fa-filter"></i> Filters
                    </button>
                </div>
    </div>  
      </>
  )
}

export default InputSearch