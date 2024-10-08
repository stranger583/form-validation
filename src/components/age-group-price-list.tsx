import AgeGroupPrice from "./age-group-price"
import type { AgeGroupPriceType } from '../types';

interface Props {
    data: AgeGroupPriceType[];
}

export default function AgeGroupPriceList({ data }:Props) {
  return (
    <div className='w-full'>
        {data.map( (item,i) =>(
            <AgeGroupPrice key={i} value={item} Seq={i+1}/>
        ))}
    </div>
    
  )
}

