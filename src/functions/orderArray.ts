export function quickSort(arrayMain: string[] | number[]): number[] {

    const array = arrayMain.map(e => parseInt(e as string));

    if (array.length == 0) return [];
    if (array.length == 1) return array;

    var pivot = array[0];
    var firstArray = array.filter(value => value < pivot)
    var secondArray = array.filter(value => value > pivot)
    var equals = array.filter(value => value == pivot);

    return quickSort(firstArray).concat(equals).concat(quickSort(secondArray));
}