import { useState } from 'react';
import { Button } from './components/ui/button';
import AgeGroupPriceList from './components/age-group-price-list';
import type { AgeGroupPriceType } from './types';
import { MAX_AGE, MIN_AGE } from './constant';

const initData = {
  ageGroup:[MIN_AGE, MAX_AGE] as AgeGroupPriceType['ageGroup'],
  price:0
}

function App() {
  const [data,setData] = useState<AgeGroupPriceType[]>([initData]);
  const [error,setError] = useState();

  return (
    <form className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Button type='submit' variant='validation'>驗證</Button>
        <AgeGroupPriceList/>
      <Button type='button' variant='add' className=' self-start'>+ 新增價格區間</Button>
    </form>
  );
}

export default App;
