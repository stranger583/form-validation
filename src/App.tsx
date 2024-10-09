import { useState } from 'react';
import AgeGroupPriceList from './components/age-group-price-list';
import type { AgeGroupPriceType, } from './types';
import { DEFAULT_ITEM } from './constant';



function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([DEFAULT_ITEM]);

  function handleChange(value:AgeGroupPriceType[]) {
    setData(value);
    console.log(value)
  }

  return (
    <div className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <h1 className='text-gray-400 text-xl'>表單驗證</h1>
      <AgeGroupPriceList
        data={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
