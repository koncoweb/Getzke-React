import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <div className="navigation-max-width">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="navigation-image"
        />
        <div className="navigation-nav">
          <NavigationLinks
            rootClassName="navigation-links-root-class-name17"
            className=""
          ></NavigationLinks>
          <a
            href="https://getzke.id/store"
            className="navigation-register button-secondary button button-md"
          >
            {props.button}
          </a>
        </div>
        <div data-type="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="mobile-menu">
          <div className="navigation-nav1">
            <div className="navigation-container">
              <img alt="image" className="" />
              <div
                data-type="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="navigation-links-root-class-name18"
              className=""
            ></NavigationLinks>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  image_src: '03aeadc5-b35b-4978-a295-0df3c4a7a535',
  button: 'STORE',
  button2: 'Get in touch',
  image_alt: 'logo',
  rootClassName: '',
}

Navigation.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
