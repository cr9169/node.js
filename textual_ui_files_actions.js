import fs from "fs";

function deleteFileByName(file) {
    fs.unlinkSync(file, (err) => {
      if (err) {
        console.log(err);
      }
    });
}
  
function createFileByName(file) {
fs.appendFileSync(file, "", (err) => {
    if (err) console.log(err);
    else {
    console.log(`file ${file} was created.`);
    }
});
}

function writeToFile(file, text) {
fs.appendFileSync(file, text, (err) => {
    if (err) console.log(err);
    else {
    console.log(`file ${file} was updated.`);
    }
});
}

function deleteFolderByName(folder) {
fs.rmdirSync(folder);
console.log(`folder ${folder} was deleted.`);
}

function createFolderByName(folder) {
fs.mkdirSync(folder, (err) => {
    if (err) console.log(err);
    else {
    console.log(`folder ${folder} was created.`);
    }
});
}

function deleteFileByNameFromFolder(filePath) {
fs.unlinkSync(filePath, (err) => {
    if (err) {
    console.log(err);
    } else {
    console.log(`success!!!`);
    }
});
}

function createFileByNameFromFolder(filePath) {
fs.appendFileSync(filePath, "", (err) => {
    if (err) console.log(err);
    else {
    console.log(`success!!!`);
    }
});
}

function mergeFiles(file1, file2) {

    fs.readFile(file2, 'utf8', (err, content) => {
        if (err) 
            console.log(err);
        else {
            fs.appendFile(file1, content, (err) => {
                if (err) 
                    console.log(err);
                else {
                    console.log("file was updated.");
                    deleteFileByName(file2);
                }
            });
        }   
    });
}

export { deleteFileByName, createFileByName, writeToFile, deleteFolderByName, createFolderByName, deleteFileByNameFromFolder, createFileByNameFromFolder, mergeFiles };