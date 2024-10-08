import { type ComponentProps } from "react";
import { cN } from "../../libs/tw-marge";
interface Props extends ComponentProps<"input"> {}

export function Input({ className, ...props }: Props) {
  return <input type="text" className={cN('size-full border p-2 border-gray-400', className)} {...props} />;
}