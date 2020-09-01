import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [category, setCategory] = useState(["Pokemon"]);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategori={setCategory} />
            <hr />
            <ol>
                { 
                    category.map( catt =>
                        <GifGrid 
                            key={catt}
                            cat={catt} 
                        />
                    ) 
                }
            </ol>
        </>
    )
}
