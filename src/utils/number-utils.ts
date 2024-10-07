export function addComma(value: number) {
  const [integer, decimal] = value.toString().split(".");
  const integerDisplay = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal ? `${integerDisplay}.${decimal}` : integerDisplay;
}
