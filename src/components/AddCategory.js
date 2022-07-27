import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, SetInputValue ] = useState('');

    const handleInputChange = (e) => {
        SetInputValue( e.target.value )
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim().length > 2){
           // setCategories( cats => [inputValue, ...cats ] )
            onNewCategory( inputValue.trim() );
            SetInputValue('')
        }
        
    }

    return (
        <form className='category-form' onSubmit={ handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                placeholder = "Search new category..."
                onChange={ handleInputChange }/>
        </form>
    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}