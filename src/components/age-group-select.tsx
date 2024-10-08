import { Select,Option } from './ui/select'
import { AGES } from '../constant'
import { cN } from '../libs/tw-marge'
import type { AgeGroupPriceType } from '../types';

interface Props {
    index:number;
    ageGroup:AgeGroupPriceType['ageGroup'];
    handleUpdatedList:<K extends keyof AgeGroupPriceType>( index:number, val:AgeGroupPriceType[K] ,type:K)=>void
}

function AgeGroupSelect({ageGroup,handleUpdatedList,index}:Props) {
    const [startAge, endAge] = ageGroup
  return (
    <div className='w-1/2 text-sm'>
        <h3 className='text-gray-400 py-2'>年齡</h3>
        <div className='flex items-center w-full h-10'>
        <Select className={cN('rounded-l',{'border-orange-500 text-orange-500':true})} value={startAge}>
        {AGES.map((age) => (
                <Option key={age}>
                {age}
                </Option>
            ))}
        </Select>
        <div className='flex items-center p-2 border-y border-gray-400 text-gray-400 bg-gray-50 h-full'>~</div>
        <Select className={cN('rounded-r',{'border-orange-500 text-orange-500':true})} value={endAge}>
        {AGES.map((age) => (
                <Option key={age}>
                {age}
                </Option>
            ))}
        </Select>
        </div>
        <div className='bg-orange-500/20 text-orange-500 rounded w-full p-2'>年齡區間不可重疊</div>
    </div>
  )
}

export default AgeGroupSelect
