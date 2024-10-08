import { useState } from 'react';
import { Button } from './components/ui/button';
import AgeGroupPriceList from './components/age-group-price-list';
import type { AgeGroupPriceType } from './types';
import type { ageGroupType } from './types';
import { MAX_AGE, MIN_AGE } from './constant';
import { getNumberIntervals } from './utils/age-utils';

const defaultItem = {
  ageGroup: [MIN_AGE, MAX_AGE] as AgeGroupPriceType['ageGroup'],
  price: 0
}

function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([defaultItem]);

  const ageRange = data.map(item => item.ageGroup)
  const { notInclude, overlap } = getNumberIntervals(ageRange);
  const isFullCoverage = notInclude.length === 0;

  const isOverLapList = findOverlapIndices(overlap, ageRange);
  
  function findOverlapIndices(overlap: ageGroupType[], ageRange: ageGroupType[]) {
    return ageRange.map(range => {
      return overlap.some(ol => {
        return !(range[1] < ol[0] || range[0] > ol[1]);
      });
    });
  }

  function handleUpdatedList<K extends keyof AgeGroupPriceType>(index: number, val: AgeGroupPriceType[K], type: K) {
    const newList = [...data];
    newList[index] = {
      ...newList[index],
      [type]: val
    }
    setData(newList)
  }

  function handleAddList() {
    setData(prev => [...prev, defaultItem]);
  }

  function handleRemoveList(index: number) {
    const newList = [...data];
    newList.splice(index, 1);
    setData(newList)
  }

  return (
    <div className='w-vw h-dvh p-4 flex flex-col items-center max-w-screen-xl mx-auto'>
      <h1 className='text-gray-400 text-xl'>表單驗證</h1>
      <AgeGroupPriceList
        data={data}
        handleRemoveList={handleRemoveList}
        handleUpdatedList={handleUpdatedList}
        isOverLapList={isOverLapList}
      />
      <Button
        type='button'
        variant={isFullCoverage ? 'disabled' : 'add'}
        className='self-start'
        onClick={handleAddList}
        disabled={isFullCoverage}
      >
        + 新增價格區間
      </Button>
    </div>
  );
}

export default App;
