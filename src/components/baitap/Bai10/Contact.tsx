import React from 'react'
const generateLoremIpsum = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return Array(100).fill(lorem).join(' ');
};
export default function Contact() {
    const loremIpsumText = generateLoremIpsum();
  return (
    <div>
      <h1>Contact</h1>
      <p>{loremIpsumText}</p>
    </div>
  )
}
