export function addComma(value: number | string) {
  const [integer, decimal] = value.toString().split(".");
  const integerDisplay = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal !== undefined
    ? `${integerDisplay}.${decimal}`
    : integerDisplay;
}

export function removeComma(value: string) {
  return value.replace(/,/g, "");
}

export function formatPrice(value: string) {
  if (value === "-") return "0";
  return removeLeadingZeroes(value);
}

// 移除多餘的 0
function removeLeadingZeroes(value: string) {
  return value.replace(/^-?0+(?=\d)/, match => (match.includes('-') ? '-' : ''));;
}
