import type { ageGroupType } from "../../types";
import { getNumberIntervals } from "../age-utils";

describe('getNumberIntervals', () => {
  // 測試給定的輸入和輸出
  test('should correctly identify overlap and not included intervals for the given input', () => {
    const input:ageGroupType[] = [[6, 11], [5, 8], [17, 20], [7, 7], [14, 17]];
    const expected = {
      overlap: [[6, 8], [17, 17]],
      notInclude: [[0, 4], [12, 13]]
    };
    expect(getNumberIntervals(input)).toEqual(expected);
  });

  // 測試沒有重疊的情況
  test('should handle non-overlapping intervals', () => {
    const input:ageGroupType[] = [[1, 3], [5, 7], [9, 11]];
    const expected = {
      overlap: [],
      notInclude: [[0, 0], [4, 4], [8, 8], [12, 20]]
    };
    expect(getNumberIntervals(input)).toEqual(expected);
  });

  // 測試完全重疊的情況
  test('should handle completely overlapping intervals', () => {
    const input:ageGroupType[] = [[5, 10], [5, 10], [5, 10]];
    const expected = {
      overlap: [[5, 10]],
      notInclude: [[0, 4], [11, 20]]
    };
    expect(getNumberIntervals(input)).toEqual(expected);
  });

  // 測試邊界情況：覆蓋整個範圍
  test('should handle intervals covering the entire range', () => {
    const input:ageGroupType[] = [[0, 20]];
    const expected = {
      overlap: [],
      notInclude: []
    };
    expect(getNumberIntervals(input)).toEqual(expected);
  });


  // 測試單點區間
  test('should handle single-point intervals', () => {
    const input:ageGroupType[] = [[3, 3], [7, 7], [7, 7]];
    const expected = {
      overlap: [[7, 7]],
      notInclude: [[0, 2], [4, 6], [8, 20]]
    };
    expect(getNumberIntervals(input)).toEqual(expected);
  });
});