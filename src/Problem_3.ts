{
  // start

  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceLowerCase = sentence.toLocaleLowerCase();
    const wordLowerCase = word.toLocaleLowerCase();
    const dividedSentence = sentenceLowerCase.split(" ");
    const query = dividedSentence.filter(
      (item) => item === wordLowerCase
    ).length;
    return query;
  };

  const result = countWordOccurrences(
    "I love typescript typescript Typescript Typescript Typescript typescript",
    "typescript"
  );
  console.log(result);

  // end
}
