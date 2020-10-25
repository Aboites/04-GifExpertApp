import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// Functional component
const GifExpertApp = () => {

    // const categories = ['Coding', 'Yorkie', 'Futbol'];
    const [categories, setCategories] = useState(['Coding', 'Yorkie', 'Futbol']);

    // const handleAdd = (e) => setCategories( [...categories, 'Chivas'] );
    // const handleAdd = (e) => setCategories( cats => [...cats, 'Chivas'] );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />


            <ol>
                {
                    categories.map( category => {
                    return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;