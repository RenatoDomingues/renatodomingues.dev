
import React from 'react'
import { GrLanguage } from 'react-icons/gr'
import { GoStar } from 'react-icons/go'

const repo = ( { repo } ) => {
    return (
        <div className='rounded bg-white mx-4 md:mx-0 my-2 md:my-0 p-2 md:p-4 hover:shadow-md'>
            <h3 className='font-bold border-2 border-pink-200 rounded hover:border-purple'> <a href={'https://github.com/' + repo.full_name}> {repo.full_name} </a> </h3>
            <p>Language: <GrLanguage className='inline-block' /> {repo.language} / Stars:<GoStar className='inline-block' /> {repo.stargazers_count}</p>
        </div>
    )
}
export default repo 