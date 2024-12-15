{
  // start

  const sumArray = (value: number[]): number => {
    return value.reduce((sum, current) => sum + current, 0);
  };

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);

  // end
}
