import React from 'react'

export const GifGridItem = ( {title, image} ) => {
    return (
        <>
            <div className="card animate__animated animate__fadeIn">
                <h3>{ title }</h3>
                <img src={image} alt={title} width="350px"/>
            </div>
        </>
    )
}
