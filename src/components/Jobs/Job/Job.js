import React from 'react'
import Truncate from 'react-truncate'
import './Job.css'

const Job = ({ id, title, type, date, url, company, companyUrl, location, description }) => {
    return (
        <div className="job">
            <div className="job__card">
                <div className="job__cardTitle">
                    <h3>{title}</h3>          
                    <small>{date}</small>
                </div>
                <div className="job__cardBody">
                    <h4>{type}</h4>
                    <h5>{company} - {location}</h5>
                    <p>
                        <Truncate lines="3">{description}</Truncate>...
                        <a href={url} target="_blank" className="more"> Read More</a>
                    </p>
                </div>

            </div>            
        </div>
    )
}

export default Job
