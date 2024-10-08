import AgeGroupPrice from "./age-group-price"
import type { AgeGroupPriceType, UpdateAgeGroupPriceType } from '../types';

interface Props {
  data: AgeGroupPriceType[];
  isOverLapList: boolean[];
  onChange: (value: AgeGroupPriceType[]) => void;
}

export default function AgeGroupPriceList({ data, onChange, isOverLapList }: Props) {

  function handleUpdatedList<K extends keyof AgeGroupPriceType>(
    index: number,
    val: AgeGroupPriceType[K],
    type: K
  ) {
    const newList = [...data];
    newList[index] = {
      ...newList[index],
      [type]: val
    }
    onChange(newList)
  }

  function handleRemoveList(index: number) {
    const newList = [...data];
    newList.splice(index, 1);
    onChange(newList)
  }
  return (
    <div className='w-full'>
      {data.map((item, i) => (
        <AgeGroupPrice
          key={i}
          value={item}
          index={i}
          isOverLap={isOverLapList[i]}
          handleRemoveList={handleRemoveList}
          handleUpdatedList={handleUpdatedList}
        />
      ))}
    </div>

  )
}

