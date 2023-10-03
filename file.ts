// to write in a file
// const data = ' Bun Toolkit';
// await Bun.write('output.txt', data);


// to read fro ma file

const file= await Bun.file('output.txt')
console.log(await file.text())