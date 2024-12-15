{
  // start

  const removeDuplicates = (numbers: number[]): number[] => {
    const newNumbers = numbers.filter(
      (item, index) => numbers.indexOf(item) === index
    );
    return newNumbers;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 8, 8, 4, 4, 5]);
  console.log(result);

  // end
}
