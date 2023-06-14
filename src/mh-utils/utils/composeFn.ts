export function composeFn<U>(...fns: Function[]) {
  return (initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}
