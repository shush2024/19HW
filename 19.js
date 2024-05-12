// Տրված են  a b բնական թվերը

// արտածել YES եթե՝

// երկուսն էլ կենտ են

// function Numbers(a, b){
//     if ( a % 2 !== 0 && b % 2 !== 0)
//         console.log("YES");
//     else{
//         console.log("NO");
//     }
// }

// Numbers(13, 21);

// Գոնե մեկը կենտ է

// function Numbers(a, b) {
//     if( a % 2 !== 0 && b % 2 === 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }

// Numbers(21, 22)

// Ճիշտ մեկը կենտ է

// function Numbers(a, b) {
//     if( (a % 2 !== 0 && b % 2 === 0) || ( a % 2 === 0 && b % 2 !== 0)){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Numbers( 12, 17)

// Երկուսն էլ կենտ են կամ զույգ

// function Numbers(a, b) {
//     if( ( a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)){
//         console.log("YES");}
//         else{
//             console.log("NO");
//         }
//     }
// Numbers( 12, 12)


// Տրված են a b c ամբողջ թվերը


// արտածել YES եթե դրանցից գոնե մեկը 0 է։

// function Numbers(a, b , c) {
//     if ( a === 0 || b === 0 || c === 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Numbers(2,1,0)

// Ճիշտ 1-ը 5 է

// function Numbers(a, b, c) {
//     if(( a === 5 && b !== 5 && c !== 5) || ( a !== 5 && b === 5 && c !== 5) || ( a !== 5 && b !== 5 && c === 5)){
//         console.log("YES");}
//         else{
//             console.log("NO");
//         }
//     }
    
// Numbers( 5, 3, 6)

// Ոչ մեկը մյուսներին հավասար չէ


// function Numbers(a , b, c) {
//     if(a !== b && b !== c && a !== c){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }

// Numbers( 7,8,9)

// Ճիշտ երկուսն են հավասար

// function Numbers(a, b, c) {
//     if((a === b && a !== c) || ( a === c && a !== b) || ( b === c && b !== a)){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Numbers( 2, 3, 3)

// բոլոր 3-ն իրար հավասար են

// function Numbers(a, b, c) {
//     if( a === b && a === c && b === c){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Numbers(1, 1, 1)

// Գոնե մեկը բացասական է

// function Numbers(a, b, c) {
//     if(a < 0 || b < 0 || c < 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Numbers(-1,2,3)
