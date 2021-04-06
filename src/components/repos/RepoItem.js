import React from 'react'
import PropTypes from 'prop-types'

export const RepoItem = ({ repo }) => {
    return (
        <div className="card">
            <a href={ repo.html_url } target="blank">{repo.name} </a>
        </div>
    )
}

RepoItem.propTypes = {
    repo:PropTypes.object.isRequired,
}

export default RepoItem