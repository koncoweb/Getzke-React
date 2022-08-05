import React from 'react'

import PropTypes from 'prop-types'

import BlogCard from './blog-card'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-blog section-container">
      <div className="blog-max-width max-content-container">
        <span className="blog-text">{props.text}</span>
        <h2 className="blog-text1 heading2">
          <span>Our latest articles and resources</span>
        </h2>
        <span className="blog-text3">
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
        <button className="blog-primary button-secondary button-lg button">
          {props.primary}
        </button>
        <div className="blog-blog-cards-container">
          <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
          <BlogCard
            text1="Aug 14, 2022"
            button="advertising"
            image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
            rootClassName="blog-card-root-class-name1"
          ></BlogCard>
          <BlogCard
            text1="Jul 12, 2022"
            button="Branding"
            image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
          ></BlogCard>
        </div>
      </div>
    </div>
  )
}

Blog.defaultProps = {
  primary: 'Explore the blog',
  text: 'from blog',
}

Blog.propTypes = {
  primary: PropTypes.string,
  text: PropTypes.string,
}

export default Blog
