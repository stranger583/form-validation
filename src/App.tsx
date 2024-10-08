import React from 'react';
import { Button } from './components/ui/button';
import AgeGroupSelect from './components/age-group-select';
function App() {
  return (
    <div className='w-vw h-dvh p-4 flex flex-col items-center'>
      <Button variant='validation'>驗證</Button>
      <AgeGroupSelect></AgeGroupSelect>
    </div>
  );
}

export default App;
