```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran:', count);
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 2); // Correct way to increment
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
export default MyComponent;
```