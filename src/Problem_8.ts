{
  // start

  const validateKeys = <T extends object>(
    obj: T,
    keys: (string | keyof T)[]
  ): boolean => {
    return keys.every((key) => key in obj);
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = validateKeys(person, ["name", "address"]);
  console.log(result);

  // end
}
