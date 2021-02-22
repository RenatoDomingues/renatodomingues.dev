
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'

const userStats = ( {user} ) => {
    return (
        <p className='text-center'>
            GitHub Stats: public repositories: 
            <RiGitRepositoryFill className='inline-block' /> {user.public_repos} / 
            public_gists: 
            <GoGist className='inline-block' /> {user.public_gists} / 
            followers: 
            <FiUsers className='inline-block' /> {user.followers}
        </p>
    )
}
export default userStats