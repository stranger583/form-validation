import React from 'react';
import { getNumberIntervals } from './utils/age-utils';
function App() {
  const a = getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]);
  console.log(a);
  return (
    <div className='bg-red-500 w-vw h-vh'>

    </div>
  );
}

export default App;
