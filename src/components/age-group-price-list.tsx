import AgeGroupPrice from "./age-group-price";
import type { AgeGroupPriceType, UpdateAgeGroupPriceType } from "../types";
import { Button } from "./ui/button";
import { getNumberIntervals, findOverlapIndices } from "../utils/age-utils";
import { DEFAULT_ITEM } from "../constant";

interface Props {
  data: AgeGroupPriceType[];
  onChange: (value: AgeGroupPriceType[]) => void;
}

export default function AgeGroupPriceList({ data, onChange }: Props) {
  const ageRange = data.map((item) => item.ageGroup);
  const { notInclude, overlap } = getNumberIntervals(ageRange);
  const isFullCoverage = notInclude.length === 0;

  const isOverLapList = findOverlapIndices(overlap, ageRange);
  function handleUpdatedList<K extends keyof AgeGroupPriceType>(
    index: number,
    val: AgeGroupPriceType[K],
    type: K
  ) {
    const newList = [...data];
    newList[index] = {
      ...newList[index],
      [type]: val,
    };
    onChange(newList);
  }

  function handleRemoveList(index: number) {
    const newList = [...data];
    newList.splice(index, 1);
    onChange(newList);
  }

  function handleAddList() {
    onChange([...data, DEFAULT_ITEM]);
  }

  return (
    <>
      <div className="w-full">
        {data.map((item, i) => (
          <AgeGroupPrice
            key={i}
            value={item}
            index={i}
            isOverLap={isOverLapList[i]}
            handleRemoveList={handleRemoveList}
            handleUpdatedList={handleUpdatedList}
          />
        ))}
      </div>
      <Button
        type="button"
        variant={isFullCoverage ? "disabled" : "add"}
        className="self-start"
        onClick={handleAddList}
        disabled={isFullCoverage}
      >
        + 新增價格區間
      </Button>
    </>
  );
}
