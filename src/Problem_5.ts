{
  // start

  const getProperty = <T, K extends keyof T>(
    object: T,
    propertyName: K
  ): T[K] => {
    return object[propertyName];
  };

  const person = { name: "Alice", age: 30, isTrue: true };
  const result = getProperty(person, "isTrue");
  console.log(result);

  // end
}
