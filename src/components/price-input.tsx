import { cN } from '../libs/tw-marge'
import { Input } from './ui/input'
import type { AgeGroupPriceType } from '../types';
import { useState } from 'react';
import { addComma, removeComma, formatPrice } from '../utils/number-utils';

interface Props {
  index: number;
  price: AgeGroupPriceType['price'];
  handleUpdatedList: <K extends keyof AgeGroupPriceType>(index: number, val: AgeGroupPriceType[K], type: K) => void;
}

function PriceInput({ price, handleUpdatedList, index }: Props) {
  const [priceVal, setPriceVal] = useState(price.toString());
  const isValueEmpty = priceVal==='';

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = removeComma(e.target.value);
    const formatVal = formatPrice(val);
    
    // 空值
    if (formatVal === '') {
      handleUpdatedList(index, 0, 'price')
      setPriceVal('');
    }

    // 非數字
    if (Number.isNaN(+formatVal)) return;

    const priceWithComma = addComma(formatVal)
    handleUpdatedList(index, +val, 'price')
    setPriceVal(priceWithComma);
  };

  return (
    <div className='w-1/2 text-sm'>
      <h3 className='text-gray-400 py-2'>入住費用(每人每晚)</h3>
      <div className='flex items-center w-full h-10'>
        <div className='flex items-center text-gray-400 p-2 border border-r-0 rounded-l h-full border-gray-400'>TWD</div>
        <Input
          maxLength={20}
          value={priceVal}
          placeholder='請輸入費用'
          onChange={e => handlePriceChange(e)}
          className={cN(' rounded-r', { 'border-orange-500 text-orange-500': isValueEmpty })}
        />
      </div>
      <div className={cN('invisible bg-orange-500/20 text-orange-500 rounded w-full p-2',{'visible':isValueEmpty})}>不可為空白</div>
      <div className='text-gray-400 text-end py-1'>輸入 0 表示免費</div>
    </div>
  )
}

export default PriceInput
