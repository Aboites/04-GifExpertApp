import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Functional component
const GifExpertApp = () => {

    // const categories = ['Coding', 'Yorkie', 'Futbol'];
    const [categories, setCategories] = useState(['Coding']);

    // const handleAdd = (e) => setCategories( [...categories, 'Chivas'] );
    // const handleAdd = (e) => setCategories( cats => [...cats, 'Chivas'] );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;