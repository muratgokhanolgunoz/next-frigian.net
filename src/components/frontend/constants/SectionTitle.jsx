import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = (props) => {
    return (
        <div>
            <h3 className={`${props.sectionTitle} ${props.textAlign} ${props.titleColor}`}>{props.title}</h3>
            <p className={`${props.sectionSubTitle} ${props.textAlign} ${props.subtitleColor} `}>{props.subtitle}</p>
        </div>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    sectionTitle: PropTypes.string.isRequired,
    sectionSubTitle: PropTypes.string,
    textAlign: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired,
    subtitleColor: PropTypes.string
}

export default SectionTitle