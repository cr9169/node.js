const fs = require('fs-extra');
const { promises } = require('fs');


while(!isEmptyDir("/files_to_move")) {

fs.move('/files_to_move/ ', '/moved_files', (err) => {
    if (err) 
        console.error(err)
    else
        console.log("success!");
   });
}


function isEmptyDir(path) {  
    try {
      const directory = await Fs.opendir(path);
      const entry = await directory.read();
      await directory.close();

      return entry === null;
    } catch (error) {
      return false
    }
}