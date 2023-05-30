import React from 'react';

function MyButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default MyButton;
