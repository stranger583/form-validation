import React from 'react';
import { Button } from './components/ui/button';
import AgeGroupPriceList from './components/age-group-price-list';

function App() {
  return (
    <form className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Button type='submit' variant='validation'>驗證</Button>
      <div className='w-full'>
        <AgeGroupPriceList/>
        <AgeGroupPriceList/>
      </div>
      <Button type='button' variant='add' className=' self-start'>+ 新增價格區間</Button>
    </form>
  );
}

export default App;
