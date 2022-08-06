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
        <div className="navigation-nav">
          <NavigationLinks
            rootClassName="navigation-links-root-class-name17"
            className=""
          ></NavigationLinks>
          <a
            href="https://getzke.id/shop-2/"
            target="_blank"
            rel="noreferrer noopener"
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
        <div
          data-type="MobileMenu"
          className="navigation-mobile-menu mobile-menu"
        >
          <div className="navigation-nav1">
            <div className="navigation-container">
              <img
                alt="image"
                src="/playground_assets/logo-getzke-transparent-1500h.png"
                loading="lazy"
                className="navigation-image"
              />
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
            <a
              href="https://getzke.id/shop-2/"
              target="_blank"
              rel="noreferrer noopener"
              className="navigation-register1 button-secondary button button-md"
            >
              {props.button2}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  button: 'SHOP',
  button2: 'SHOP',
  rootClassName: '',
}

Navigation.propTypes = {
  button: PropTypes.string,
  button2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
