import AgeGroupSelect from "./age-group-select"
import PriceInput from "./price-input"
import { Button } from "./ui/button"
import type { AgeGroupPriceType } from '../types';

interface Props {
    value:AgeGroupPriceType;
    Seq:number;
}

export default function AgeGroupPrice({value, Seq}:Props) {
    const {ageGroup, price} = value;
    const isFirstItem = Seq !==1;
    return (
    <div className='border-b border-400 last:border-transparent w-full py-4'>
        <div className='flex justify-between items-center text-lg text-gray-500'>
                <h3>價格設定 - {Seq}</h3>
                {isFirstItem && <Button variant="remove">X 移除</Button>}
        </div>
        <div className='flex gap-4 w-full'>
                <AgeGroupSelect ageGroup={ageGroup}/>
                <PriceInput price={price}/>
        </div>
    </div>
    )
}
