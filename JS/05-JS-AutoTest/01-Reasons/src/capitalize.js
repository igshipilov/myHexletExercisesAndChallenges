const capitalize = (word) => {
  if (word === '') {
    return '';
  }

  const [ firstChar, ...restChars ] = word;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

export { capitalize };