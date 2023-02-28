const fs = require('node:fs');
const path = require("path");

// fs.mkdir(path.join('./', 'main'),(err)=>{
//     if (err) throw new Error();
// })


// for (let i = 0; i < 5; i++) {
//     fs.mkdir(path.join('./main', `Folder${i + 1} `), (err) => {
//         if (err) throw new Error(err.message);
//     });
// }

// for (let i = 0; i < 5; i++) {
//     fs.writeFile(path.join('main', `file${i + 1}.txt`), `File ${i + 1}`, err => {
//         if (err) throw new Error(err.message);
//     })
// }


fs.readdir(path.join('./main'),{withFileTypes:true}, (err, files)=>{
    if (err)throw new Error(err.message)
    for (const file of files) {
        if (file.isFile()){
            console.log(`File : ${file.name}`);
        }else {
            console.log(`Folder : ${file.name}`)
        }
    }
})