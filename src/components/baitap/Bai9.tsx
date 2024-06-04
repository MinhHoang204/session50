import React from 'react'
import LazyLoad from 'react-lazyload';
const generateLoremIpsum = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return Array(100).fill(lorem).join(' ');
};
export default function Bai9() {
    const loremIpsumText = generateLoremIpsum();
  return (
    <div>
      <h1>Lazy Loading Content</h1>
      <LazyLoad height={200} offset={100} placeholder={<Loading />}>
        <p>{loremIpsumText}</p>
      </LazyLoad>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <span>Loading...</span>
      </div>
    </div>
  )
}
