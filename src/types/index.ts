export type ageGroupType = [number, number];
export interface AgeGroupPriceType {
    ageGroup:ageGroupType;
    price:number;
}

export type UpdateAgeGroupPriceType<K extends keyof AgeGroupPriceType> = (
    index: number,
    val: AgeGroupPriceType[K],
    type: K
  ) => void;