import AgeGroupSelect from '../components/age-group-select';
import PriceInput from '../components/price-input';

function AgeGroupPriceList() {
  return (
    <div className='border-b border-400 last:border-transparent w-full py-4'>
        <div className='text-lg text-gray-500'>價格設定 - 1</div>
        <div className='flex gap-4 w-full'>
            <AgeGroupSelect/>
            <PriceInput/>
        </div>
    </div>
  )
}

export default AgeGroupPriceList
