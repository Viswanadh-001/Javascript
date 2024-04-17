for (let i = 1; i <= 6; i++) {
    let spaces = ' '.repeat(i - 1);
    let stars = '*'.repeat(13 - 2 * i);
    console.log(spaces + stars);
  }