let count = 1;
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += count + ',';
        count++;
    }
    console.log(row.slice(0, -1)); 
}
