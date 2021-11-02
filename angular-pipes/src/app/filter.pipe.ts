import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  /**
   * below pure property is by default as true to avoid triggering pipe on every input change
   */
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === "") {
      return value;
    }

    const result = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        result.push(item);
      }
    }
    return result;
  }
}
