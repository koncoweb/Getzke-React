import React from 'react'

import PropTypes from 'prop-types'

import ServicesCard from './services-card'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-services section-container">
      <div className="services-max-width max-content-container">
        <div className="services-heading-container">
          <div className="services-text-container">
            <span className="services-text">{props.text}</span>
            <h2 className="heading2">
              <span>
                We provide a wide range of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>creative solutions</span>
            </h2>
          </div>
          <div className="services-controls">
            <button className="control-btn">
              <svg viewBox="0 0 1024 1024" className="services-icon">
                <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
              </svg>
              {props.button}
            </button>
            <button className="control-btn">
              <svg viewBox="0 0 1024 1024" className="services-icon2">
                <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
              </svg>
              {props.button1}
            </button>
          </div>
        </div>
        <div className="services-cards-container">
          <ServicesCard></ServicesCard>
          <ServicesCard
            text="Copy-writting"
            image_src="/playground_assets/file-document-200w.png"
          ></ServicesCard>
          <ServicesCard
            text="Product Design"
            image_src="/playground_assets/dice-5-200h.png"
          ></ServicesCard>
        </div>
      </div>
    </div>
  )
}

Services.defaultProps = {
  button1: '',
  text: 'our services',
  button: '',
}

Services.propTypes = {
  button1: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default Services
