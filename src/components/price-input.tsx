import { cN } from '../libs/tw-marge'
import { Input } from './ui/input'

function PriceInput() {
  return (
    <div className='w-1/2 text-sm'>
        <h3 className='text-gray-400 py-2'>入住費用(每人每晚)</h3>
        <div className='flex items-center w-full h-10'>
            <div className='flex items-center text-gray-400 p-2 border border-r-0 rounded-l h-full border-gray-400'>TWD</div>
            <Input 
                placeholder='請輸入費用' 
                className={cN(' rounded-r',{'border-orange-500 text-orange-500':true})}
            />
        </div>
        <div className='bg-orange-500/20 text-orange-500 rounded w-full p-2'>不可為空白</div>
        <div className='text-gray-400 text-end py-1'>輸入 0 表示免費</div>
    </div>
  )
}

export default PriceInput
