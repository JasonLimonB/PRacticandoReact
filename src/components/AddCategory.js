import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategori} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e)=>{
        setInputValue( e.target.value );
    }

    const handleSumbit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategori( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSumbit } >
            <input 
                className="inpCat" 
                type="text" 
                value = { inputValue }
                onChange={ handleChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategori: PropTypes.func.isRequired
}

