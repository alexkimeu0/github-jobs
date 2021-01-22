import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Job from './Job/Job'

import './Jobs.css'
import { CircularProgress } from '@material-ui/core'

const Jobs = () => {
    const [ jobs, setJobs ] = useState([])

    const url = "https://shrouded-harbor-39689.herokuapp.com/https://jobs.github.com/positions.json"

    useEffect(() => {
        const getJobs = async () => {
            await axios.get(url).then(response => setJobs(response.data))
        }

        getJobs()
    }, [])

    
    return (
        <div className="jobs">
            <h1 className="jobs__title">Github Jobs</h1> 
            
            <div className="jobs__container">

                {
                    !jobs.length ? < div className="loader"><CircularProgress /></ div> :
                        
                    jobs.map(job =>
                        <Job 
                            id={job.id}
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
        </div>
    )
}

export default Jobs
