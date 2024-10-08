import { Select, Option } from './ui/select'
import { AGES } from '../constant'
import { cN } from '../libs/tw-marge'
import type { AgeGroupPriceType } from '../types';
import { ErrorMsg } from './error-msg';

interface Props {
    index: number;
    ageGroup: AgeGroupPriceType['ageGroup'];
    isOverLap: boolean;
    handleUpdatedList: <K extends keyof AgeGroupPriceType>(index: number, val: AgeGroupPriceType[K], type: K) => void
}

function AgeGroupSelect({ ageGroup, handleUpdatedList, index, isOverLap }: Props) {
    const [startAge, endAge] = ageGroup;

    function handleChanged(i: number, val: number) {
        const newRange = [...ageGroup] as AgeGroupPriceType['ageGroup'];
        newRange[i] = val;
        handleUpdatedList(index, newRange, 'ageGroup');
    }

    return (
        <div className='w-1/2 text-sm'>
            <h3 className='text-gray-400 py-2'>年齡</h3>
            <div className='flex items-center w-full h-10'>
                <Select
                    className={cN('rounded-l', {
                        'border-orange-500 text-orange-500': isOverLap
                    })}
                    value={startAge}
                    onChange={e => handleChanged(0, Number(e.target.value))}
                >
                    {AGES.map((age) => (
                        <Option key={age} disabled={age > endAge}>
                            {age}
                        </Option>
                    ))}
                </Select>
                <div className='flex items-center p-2 border-y border-gray-400 text-gray-400 bg-gray-50 h-full'>~</div>
                <Select
                    className={cN('rounded-r', {
                        'border-orange-500 text-orange-500': isOverLap
                    })}
                    value={endAge}
                    onChange={e => handleChanged(1, Number(e.target.value))}
                >
                    {AGES.map((age) => (
                        <Option key={age} disabled={age < startAge}>
                            {age}
                        </Option>
                    ))}
                </Select>
            </div>
            <ErrorMsg isError={isOverLap}>
                年齡區間不可重疊
            </ErrorMsg>
        </div>
    )
}

export default AgeGroupSelect
