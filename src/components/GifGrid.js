import React from 'react';
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ( { cat } ) => {

    const {data, loading} = useFetchGifs(cat);

    
    return (
        <>
            <h3>{ cat }</h3>
            { loading && <p>Loading</p> }
            <div className="cont ">
                    {
                        data.map( img => (
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}
