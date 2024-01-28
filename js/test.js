// function normalizeInput(input, to) {
//     if(to === "upper") {
//         return input.toUpperCase();
//     } else if (to === "lower") {
//         return input.toLowerCase();
//     } 
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// function checkForName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();
//  return lowerFullName.includes(lowerFirstName);
// }

// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Caty Stars", "cAtY"));


// function getFileName(file) {
//   const dotEnter = file.indexOf(".");
//   console.log(dotEnter);
//     if(dotEnter === -1) {
//       return file.slice();
//     } else {
//       return file.slice(0, dotEnter);
//       }
//     }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.css"));
// console.log(getFileName("app"));
// console.log(getFileName("."));

// function createFileName(name, ext) {
//   const newName = name.trim();
//   console.log(newName)
//     const newExt = ext.trim();
//     return `${newName}.${newExt}`
// }
  
// console.log(createFileName(" order ", "txt"));

let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}