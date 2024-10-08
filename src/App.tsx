import React from 'react';
import { Button } from './components/ui/button';
import AgeGroupSelect from './components/age-group-select';
import PriceInput from './components/price-input';
function App() {
  return (
    <div className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Button variant='validation'>驗證</Button>
      <div className='flex gap-4 w-full'>
      <AgeGroupSelect></AgeGroupSelect>
      <PriceInput></PriceInput>
      </div>
    </div>
  );
}

export default App;
