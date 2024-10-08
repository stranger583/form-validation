import AgeGroupPrice from "./age-group-price"
import type { AgeGroupPriceType } from '../types';

interface Props {
    data: AgeGroupPriceType[];
    handleRemoveList:(index:number)=>void;
}

export default function AgeGroupPriceList({ data, handleRemoveList }:Props) {
  return (
    <div className='w-full'>
        {data.map( (item,i) =>(
            <AgeGroupPrice key={i} value={item} index={i} handleRemoveList={handleRemoveList}  />
        ))}
    </div>
    
  )
}

