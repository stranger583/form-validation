import AgeGroupSelect from "./age-group-select"
import PriceInput from "./price-input"
import { Button } from "./ui/button"

export default function AgeGroupPrice() {
    return (
    <div className='border-b border-400 last:border-transparent w-full py-4'>
        <div className='flex justify-between items-center text-lg text-gray-500'>
                <h3>價格設定 - 1</h3>
                <Button variant="remove">X 移除</Button>
        </div>
        <div className='flex gap-4 w-full'>
                <AgeGroupSelect/>
                <PriceInput/>
        </div>
    </div>
    )
}
