import React, { useState } from 'react'
import { photos } from './images.js'
import { useDispatch } from 'react-redux'
import { setDesign } from '../store/designPhoto.js'

function Design() {
    const dispatch = useDispatch();
    const addDesign = (path) => {
        //console.log(path);
        dispatch(setDesign(path))
    }
    return (
        <>
            <div>
                {
                    photos.map((item, i) => (
                        <div className='grid-cols-2 gap-2' key={i}><img onClick={() => addDesign(item)} src={item.path} alt="images" /></div>
                    ))
                }
            </div>
        </>
    )
}

export default Design