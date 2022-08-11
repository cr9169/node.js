const fs = require('fs');

function deleteFileByName(file) {
    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function createFileByName(file) {
    fs.appendFile(file, (err) => {
        if (err)
            console.log(err);
        else {
          console.log(`file ${file} was created.`);
        }
    });
}

function writeToFile(file, text) {
    fs.appendFile(files, text, (err) => {
        if (err)
            console.log(err);
        else {
          console.log(`file ${file} was updated.`);
        }
    });
}

function deleteFolderByName(folder) {
    fs.rmdirSync(folder, (err) => {
        if (err)
            console.log(err);
        else {
          console.log(`folder ${folder} was deleted.`);
        }
	});
}

function createFolderByName(folder) {
    fs.mkdirSync(folder, (err) => {
        if (err)
            console.log(err);
        else {
          console.log(`folder ${folder} was created.`);
        }
	});
}

function deleteFileByNameFromFolder(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`success!!!`);
        }
    });
}

function createFileByNameFromFolder(filePath) {
    fs.appendFile(filePath, (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`success!!!`);
        }
    });
}

function mergeFiles(file1, file2) {
    fs.readFile(file2, (err, content) => {
        if (err)
            console.log(err);
        else {
            console.log("file was read.");
        }

        fs.appendFile(file, content, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("file was updated.");
            }
        });
    });
}

function exit() {
    
}