import React from 'react'

import PropTypes from 'prop-types'

import './heading-container.css'

const HeadingContainer = (props) => {
  return (
    <div className="heading-container-heading-container">
      <h1 className="heading-container-text heading1">
        <span>We are a creative agency based</span>
        <br></br>
        <span>in Massachusetts</span>
      </h1>
      <span className="heading-container-text3">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </span>
        <br></br>
        <span> tempor incididunt ut labore et dolore magna aliqua.</span>
      </span>
      <button className="heading-container-primary button-primary button-lg button">
        {props.primary}
      </button>
    </div>
  )
}

HeadingContainer.defaultProps = {
  primary: 'Get in touch with us',
}

HeadingContainer.propTypes = {
  primary: PropTypes.string,
}

export default HeadingContainer
