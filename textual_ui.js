const fs = require('fs');
const { promises } = require("fs");
const prompt = require('prompt');

const i = 1;
let functionIndex;

while(i)
{
// 3, 8 - 2
    handleTextualUIStartMenu();
    prompt.start();
    prompt.get(['functionIndex'], (err, result) => {

        if(err) {
            console.error(err); 
        }
        
        else {
            functionIndex = result;
        }
    });

    if(functionIndex == 3 || functionIndex == 8)
    {
        prompt.start();
        prompt.get(['functionObject1', 'functionObject2'], (err, result) => {
            if(err) {
                console.error(err); 
            }
            
            else { // change the else actions 
                functionIndex = result;
            }
        });
        // actByInput(functionIndex);
    }

    if(functionIndex in [2, 4, 5, 6, 7, 9])
    {
        prompt.start();
        prompt.get(['functionObject'], (err, result) => {
            if(err) {
                console.error(err); 
            }
            
            else { // change the else actions 
                functionIndex = result;
            }
        });
        //actByInput(functionIndex);
    }

    else
        console.log("wrong index!!!");
}
















function handleTextualUIStartMenu() {
    console.log("to delete file by name type 1.\n\
                to create file by name type 2.\n\
                to write text to a file type 3.\n\
                to create folder by name type 4.\n\
                to delete folder by name type 5.\n\
                to create a file in a dictionary type 6.\n\
                to delete a file from a dictionary type 7.\n\
                to merge files type 8\n\
                to exit the system type 9\n");
}

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

async function mergeFiles(file1, file2) {
    await promises.readFile(file2, (err, content) => { // read
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

    deleteFileByName(file2); // delete just after reading 
}

function actByInput(functionIndex) {

    if(functionIndex == 1) {
        console.log("enter file name to delete");
        return "deleteFileByName";
    }
    if(functionIndex == 2) {
        console.log("enter file name to create");
        return "createFileByName";
    }
    if(functionIndex == 3) {
        console.log("enter the file name, press enter, and than enter \
                     the content to write");
        return "writeToFile";
    }
    if(functionIndex == 4) {
        console.log("enter folder name to create");
        return "createFolderByName";
    }
    if(functionIndex == 5) {
        console.log("enter folder name to delete");
        return "deleteFolderByName";
    }
    if(functionIndex == 6) {
        console.log("enter file path to create from folder");
        return "createFileByNameFromFolder";
    }
    if(functionIndex == 7) {
        console.log("enter file path to delete from folder");
        return "deleteFileByNameFromFolder";
    }
    if(functionIndex == 8) {
        console.log("enter the file name to merge to, press enter, \
                     and than enter the file name to merge");
        return "mergeFiles";
    }
    if(functionIndex == 9)
        process.exit();
}