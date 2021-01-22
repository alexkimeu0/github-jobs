import React from 'react'
import Truncate from 'react-truncate'


import './Job.css'

const Job = ({ id, title, type, date, url, company, companyUrl, location, description }) => {
    return (
        <div className="job">
            <div className="job__card">
                <div className="job__cardTitle">
                    <h5>{title}</h5> 
                    <small className="date">{date}</small>         
                </div>
                <div className="job__cardBody">
                    <h4>{type}</h4>
                    <p><a href={companyUrl} target="_blank" className="company">{company}</a>&nbsp;- <span>{location}</span></p>
                    <p className="desc">
                        <Truncate lines="3">{description}</Truncate>...
                        <a href={url} className="more" target="_blank">Read more</a>
                    </p>
                </div>

            </div>            
        </div>
    )
}

export default Job
