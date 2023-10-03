// to write in a file
// const data = ' Bun Toolkit';
// await Bun.write('output.txt', data);


// to read from a file

const file= await Bun.file('output.txt')
console.log(await file.text())