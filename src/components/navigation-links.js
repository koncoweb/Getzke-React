import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://getzke.id/home/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link navigation-Link"
      >
        {props.link1}
      </a>
      <a
        href="https://getzke.id/cart-2/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1 navigation-Link"
      >
        {props.link2}
      </a>
      <a
        href="https://getzke.id/account/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2 navigation-Link"
      >
        {props.link3}
      </a>
      <a
        href="https://getzke.id/contact-us/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link3 navigation-Link"
      >
        {props.link4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link4: 'Kontak',
  link3: 'Akun Anda',
  rootClassName: '',
  link2: 'Keranjang',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link4: PropTypes.string,
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
