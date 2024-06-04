import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
          <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          <li><Link to="/post" onClick={scrollToTop}>Post</Link></li>
        </ul>
      </nav>
    </header>
  )
}
