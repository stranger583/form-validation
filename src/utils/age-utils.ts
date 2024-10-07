type AgeRangeType = [number, number];
export function getNumberIntervals(intervals: AgeRangeType[]) {
  const Range = { max: 20, min: 0 };
  const overlap: AgeRangeType[] = []; // 重疊
  const notInclude: AgeRangeType[] = []; // 未包含

  // 創建一個長度為 21 的數組，用來標記每個數字是否被包含
  const marked = new Array(Range.max - Range.min + 1).fill(0);

  // 標記所有被包含的數字
  intervals.forEach((interval) => {
    const [start, end] = interval;
    for (let i = start; i <= end; i++) {
      marked[i] += 1;
    }
  });

  // 找出重疊和未包含的區間
  let start = 0;
  for (let i = 0; i < marked.length; i++) {
    if (i == 0) continue; // 排除 -1 的情況
    if (marked[i] === marked[i - 1]) continue; // 直到轉換不同情況
    if (marked[i] > 1 && marked[i - 1] > 1) continue; // 計算重複區間 ex: 2 or 3 都是重複
    if (marked[start] > 1) overlap.push([start, i - 1]);
    if (marked[start] === 0) notInclude.push([start, i - 1]);
    start = i;
  }

  return { overlap, notInclude };
}
