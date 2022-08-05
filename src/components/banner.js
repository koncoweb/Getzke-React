import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner section-container">
      <div className="banner-max-width max-content-container">
        <span className="banner-text">{props.text}</span>
        <h2 className="banner-text1 heading2">
          <span>Let’s collaborate!</span>
        </h2>
        <span className="banner-text3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </span>
        </span>
        <button className="banner-primary button-lg button-secondary-white button">
          {props.primary}
        </button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  primary: 'Contact us',
  text: 'what are you waiting?',
}

Banner.propTypes = {
  primary: PropTypes.string,
  text: PropTypes.string,
}

export default Banner
