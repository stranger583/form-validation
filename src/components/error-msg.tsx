import { cN } from '../libs/tw-marge'

interface Props {
    isError: boolean;
    children: React.ReactNode;
}

export function ErrorMsg({ isError, children }: Props) {
    return (
        <div>
            <div className={cN('invisible bg-orange-500/20 text-orange-500 rounded w-full p-2', { 'visible': isError })}>
                {children}
            </div>
        </div>
    )
}

