import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Evangelion','Naruto','Digimon']);

    const onAddCategory = ( newCategory ) => {
        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([ newCategory, ...categories ])
    }

    const onDeleteCategory = ( category ) => {
        let newCategories = categories.filter( cat => {
            return cat.toLowerCase() !== category.toLowerCase();
        })

        setCategories(newCategories);
    }

    return (
        <>
            <h2 className="appHeader animate__animated animate__pulse">GifExpert<span className='spanHeader' >APP</span></h2>
            <AddCategory onNewCategory={ onAddCategory } />   
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category }
                            onDeleteCat = { onDeleteCategory } />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp