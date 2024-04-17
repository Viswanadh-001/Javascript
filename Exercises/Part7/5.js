for (let i = 1; i <= 6; i++) {
    let spaces = ' '.repeat(6 - i);
    let stars = '$'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }