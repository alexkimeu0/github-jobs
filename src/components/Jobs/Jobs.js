import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CircularProgress } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import Job from './Job/Job'

import './Jobs.css'

const Jobs = () => {
    const [searchInput, setSearchInput] = useState('')
    const [ jobs, setJobs ] = useState([])


    useEffect(() => {
        const getJobs = async () => {
            await axios
                .get("https://glacial-shore-61341.herokuapp.com/https://jobs.github.com/positions.json?markdown=true")
                .then(response => setJobs(response.data))
        }
        getJobs()
    }, [])

    
    const handleSearch = (e) => {
        e.preventDefault()
        const getSearch = async () => {
            await axios
                .get(`https://glacial-shore-61341.herokuapp.com/https://jobs.github.com/positions.json?search=${searchInput}&markdown=true`)
                .then(response => setJobs(response.data))
        }
        getSearch()
    }

    
    return (

        <>
        <div className="search">
            <form onSubmit={handleSearch} className="search__form">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search Job..."
                    onChange={(e) => setSearchInput(e.target.value)} />
                <SearchIcon className="search__icon" />
            </form>
            
        </div>
        <div className="jobs">
            <h1 className="jobs__title">Github Jobs</h1> 

            {
                !jobs.length ? < div className="loader"><CircularProgress /></ div> :
                    <div className="jobs__container">

                        {
                            jobs.map(job =>
                                <Job
                                    key={job.id}
                                    title={job.title}
                                    type={job.type}
                                    url={job.url}
                                    date={job.created_at}
                                    location={job.location}
                                    company={job.company}
                                    companyUrl={job.company_url}
                                    description={job.description}
                                />)
                        }
                    </div>
            }
            </div>
            </>
    )
}

export default Jobs
