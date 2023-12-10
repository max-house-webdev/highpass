type TUnits = "px" | "em" | "rem";

interface IArgs {
  numbers: number;
  units: TUnits;
}

export function addUnitsToNumbers(args: IArgs): string {
  /**
   * Добавляет единицы измерения.
   * @param number: значение
   * @param units: единицы измерения
   * @return: значение с указанием единиц измерения
   * @rtype string
   */
  const { numbers, units } = args;
  return numbers + units;
}

export const addPixels = (numbers: number) =>
  addUnitsToNumbers({
    numbers,
    units: "px",
  });
