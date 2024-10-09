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

export function removeLeadingZeroes(value: string) {
  // 匹配開頭的減號（可選）和一個或多個零，並確保後面是數字
  // 使用 replace 方法移除開頭的零，負數則保留減號
  return value.replace(/^-?0+(?=\d)/, match => (match.includes('-') ? '-' : ''));;
}
