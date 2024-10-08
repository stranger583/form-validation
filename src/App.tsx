import { useState } from 'react';
import { Button } from './components/ui/button';
import AgeGroupPriceList from './components/age-group-price-list';
import type { AgeGroupPriceType } from './types';
import { MAX_AGE, MIN_AGE } from './constant';

const defaultItem = {
  ageGroup:[MIN_AGE, MAX_AGE] as AgeGroupPriceType['ageGroup'],
  price:0
}

function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([defaultItem]);
  const [error, setError] = useState();

  function handleUpdatedList<K extends keyof AgeGroupPriceType>( index:number, val:AgeGroupPriceType[K] ,type:K){
    const newList = [...data];
    newList[index] = {
      ...newList[index],
      [type]:val
    }
    setData(newList)
  }

  function handleAddList(){
    setData(prev=> [...prev,defaultItem]);

  }

  function handleRemoveList(index:number){
      const newList = [...data];
      newList.splice(index, 1);
      setData(newList)
  }

  return (
    <form className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Button type='submit' variant='validation'>驗證</Button>
        <AgeGroupPriceList 
          data={data} 
          handleRemoveList={handleRemoveList}
          
        />
      <Button type='button' variant='add' className='self-start' onClick={handleAddList}>+ 新增價格區間</Button>
    </form>
  );
}

export default App;
