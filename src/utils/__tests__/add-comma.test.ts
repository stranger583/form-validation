import { addComma } from "../number-utils";

describe('addComma', () => {
    it('should format the number with commas correctly', () => {
      const input = -7855948.9527;
      const output = '-7,855,948.9527';
      expect(addComma(input)).toBe(output);
    });
  
    it('should format integers without decimals correctly', () => {
      const input = 1000000;
      const output = '1,000,000';
      expect(addComma(input)).toBe(output);
    });
  });