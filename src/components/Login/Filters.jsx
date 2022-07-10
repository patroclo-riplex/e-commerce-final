import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCategoryThunk, getProductsThunk } from '../redux/actions';
import './style/filters.css';

const Filters = ({isFilterOpen, setIsFilterOpen}) => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [ isCatFiltOpen, setIsCatFiltOpen ] = useState(false);
    
    return (
        <div className={`filter-modal ${isFilterOpen ? 'filter-open' : ""}`}>
            <div className="close-button-container">
                <button onClick={() => setIsFilterOpen(false)} className='close-button'>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
            <div className="filters-container">
                <h2>Filters</h2>
                <button 
                    className='category-filter-button'
                    onClick={() => setIsCatFiltOpen(!isCatFiltOpen)}
                >
                    Category <i className="fa-solid fa-angle-down"></i>
                </button>
                <ul className={`categories-list  ${isCatFiltOpen ? 'categories-list-open' : ''}`}>
                    <button 
                        onClickCapture={() => {dispatch(getProductsThunk()); setIsFilterOpen(false)}}
                        className='category-button'
                    >
                        All products
                    </button>
                    {
                        categories.slice(0,3).map(category => (
                            <button 
                                key={category.id} 
                                onClick={() => {dispatch(filterCategoryThunk(category.id)); setIsFilterOpen(false);}}
                                className='category-button'
                            >
                                {category.name}
                            </button>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default Filters;