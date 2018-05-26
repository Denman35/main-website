import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ siteTitle }) => (
  <div>
    <h1>{siteTitle}</h1>
    <div>
      <Link to='/projects/'>Projects</Link>
      <Link to='/about/'>About</Link>
      <Link to='/contact/'>Contact</Link>
    </div>
  </div>
)

export default Header
