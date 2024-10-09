import { AgeGroupPriceType } from "../types";

export const MIN_AGE = 0;
export const MAX_AGE = 20;
export const AGES = [...Array(MAX_AGE - MIN_AGE + 1)].map((_, i) => i);

export const DEFAULT_ITEM = {
  ageGroup: [MIN_AGE, MAX_AGE] as AgeGroupPriceType["ageGroup"],
  price: 0,
};
