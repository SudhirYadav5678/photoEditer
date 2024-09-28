import React from 'react'

function CreateCompo({ info, currentComponents }) {

    return (
        <>
            <div className='w-auto h-auto'>
                <img className='w-[800px] h-[500px]  object-cover' src={info.image} alt="images" />
            </div>
        </>
    )
}

export default CreateCompo