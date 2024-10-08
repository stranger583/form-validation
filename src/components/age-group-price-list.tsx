import AgeGroupPrice from "./age-group-price"
import type { AgeGroupPriceType, UpdateAgeGroupPriceType } from '../types';

interface Props {
    data: AgeGroupPriceType[];
    isOverLapList: boolean[];
    handleRemoveList:(index:number)=>void;
    handleUpdatedList:UpdateAgeGroupPriceType<'price'|'ageGroup'>
}

export default function AgeGroupPriceList({ data, isOverLapList, handleRemoveList, handleUpdatedList }:Props) {
  return (
    <div className='w-full'>
        {data.map( (item,i) =>(
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

