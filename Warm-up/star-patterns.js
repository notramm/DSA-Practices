// let n = 4;
// for ( let i = 0; i < n; i++ ) {
//     let row = '';
//     for ( let j = 0; j < n; j++ ) {
//         row += "* ";
//     }
//     console.log( row );
// }

// <-Output->
// * * * *
// * * * *
// * * * *
// * * * *

// let n = 4;
// for ( let i = 0; i < n; i++ ) {
//     let row = '';
//     for ( let j = 0; j <= i; j++ ) {
//         row += "* ";
//     }
//     console.log( row );
// }

// *
// * *
// * * *
// * * * *

// let n = 5;
// for ( let i = 1; i <= n; i++ ) {
//     let row = '';
//     for ( let j = 1; j <= i; j++ ) {
//         row += `${ i  } `;
//     }
//     console.log( row );
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5;
// for ( let i = 0; i < n; i++ ) {
//     let row = '';
//     for ( let j = 0; j < n-i; j++ ) {
//         row += `${ j + 1 } `;
//     }
//     console.log( row );
// }

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
for ( let i = 1; i <= n; i++ ) {
    let row = '';
    let toggle = 1;
    for ( let j = 1; j <= i; j++ ) {
        row = `${row + toggle} `;
        if ( toggle == 1 ) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log( row );
}

// 1 
// 1 0 
// 1 0 1 
// 1 0 1 0 
// 1 0 1 0 1
