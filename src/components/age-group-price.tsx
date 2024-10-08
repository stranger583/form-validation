import AgeGroupSelect from "./age-group-select"
import PriceInput from "./price-input"
import { Button } from "./ui/button"
import type { AgeGroupPriceType, UpdateAgeGroupPriceType } from '../types';

interface Props {
    value: AgeGroupPriceType;
    index: number;
    isOverLap: boolean;
    handleRemoveList: (index: number) => void;
    handleUpdatedList: UpdateAgeGroupPriceType<'price' | 'ageGroup'>

}

export default function AgeGroupPrice({ value, index, isOverLap, handleRemoveList, handleUpdatedList }: Props) {
    const { ageGroup, price } = value;
    const isFirstItem = index !== 0;
    return (
        <div className='border-b border-400 last:border-transparent w-full py-4'>
            <div className='flex justify-between items-center text-lg text-gray-500'>
                <h3>價格設定 - {index + 1}</h3>
                {isFirstItem && (
                    <Button
                        variant="remove"
                        onClick={() => handleRemoveList(index)
                        }>
                        X 移除
                    </Button>)}
            </div>
            <div className='flex gap-4 w-full'>
                <AgeGroupSelect isOverLap={isOverLap} ageGroup={ageGroup} handleUpdatedList={handleUpdatedList} index={index} />
                <PriceInput price={price} handleUpdatedList={handleUpdatedList} index={index} />
            </div>
        </div>
    )
}



