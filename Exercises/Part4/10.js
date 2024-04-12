// for (i = 1; i <= 100; i = i + 1) {
//     document.write(i);
//     if (i % 10 === 0) {
//       document.write("<br>");
//     }
//     }

// let count = 1;
// for (let i = 1; i <= 10; i++) {
//     let row = '';
//     for (let j = 1; j <= 10; j++) {
//         if (count < 10) {
//             row += count + ',';
//         } else {
//             row += count;
//         }
//         count++;
//     }
//     console.log(row);
// }

let count = 1;
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += count + ',';
        count++;
    }
    console.log(row.slice(0, -1)); 
}
