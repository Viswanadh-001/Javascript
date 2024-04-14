for (let i = 1; i <= 10; i++) {
    let row = " ";
    for (let j = 1; j <= 10 - i; j++) {
      row += i.toString().repeat(2);
    }
    console.log(row);
  }  