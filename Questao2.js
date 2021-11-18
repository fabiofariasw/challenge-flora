export function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

   return birds.map(name => {
    const resultFindGeese = geese.find(e => e === name);
    if (!resultFindGeese) {
      return name;
    }
  });
}

export function validateWord(word) {
  const wordToLowerCase = word.toLowerCase();

  const arrayUnknownTest = wordToLowerCase.split('');
  const arrayBoolean = [];

  arrayUnknownTest.map(text => {
    const filterArrayUnknownTest = arrayUnknownTest.filter(e => e === text);
    
    if (filterArrayUnknownTest.length === 1) {
      arrayBoolean.push(false);
    } else {
      arrayBoolean.push(true);
    }
  })

  if (arrayBoolean.every(e => e === true)) {
    return true;
  }

  if (arrayBoolean.every(e => e === false)) {
    return true;
  }

  return false;
}

