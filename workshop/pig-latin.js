function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/i;
  
  if (vowelRegex.test(str)) {
    return str + "way";
  }

  const firstVowelMatch = str.match(/[aeiou]/i);
  if (!firstVowelMatch) {
    return str + "ay";
  }

  const vowelIndex = firstVowelMatch.index;
  const consonantCluster = str.slice(0, vowelIndex);
  const remainingStr = str.slice(vowelIndex);

  return remainingStr + consonantCluster + "ay";
}