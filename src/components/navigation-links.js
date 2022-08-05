import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://getzke.id"
        className="navigation-links-link navigation-Link"
      >
        {props.link1}
      </a>
      <a
        href="https://getzke.id/pesanan/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1 navigation-Link"
      >
        {props.link2}
      </a>
      <a
        href="https://getzke.id/my-account/edit-account/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2 navigation-Link"
      >
        {props.link3}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Akun Anda',
  rootClassName: '',
  link2: 'Pesanan',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
