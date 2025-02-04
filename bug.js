```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran:', count);
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]); // Only re-run effect if 'count' changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // Double increment
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