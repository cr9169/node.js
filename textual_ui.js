const fs = require('fs');
const { promises } = require("fs");
const prompt = require('prompt');

const i = 1;

handleUI();

function handleUI() {
    
let functionName;
let functionIndex;
//while(i)
    handleTextualUIStartMenu();
    prompt.start();
    prompt.get(['Index'], (err, mainResult) => {

        if(err) {
            console.error(err); 
        }
        
        else {
            functionIndex = Number(mainResult.Index); // this performed first, and than going to the ifs
            console.log(functionIndex);

            if(functionIndex == 3 || functionIndex == 8)
            {
                functionName = actByInput(functionIndex);
                prompt.get(['functionObject1', 'functionObject2'], (err, seconderyResult) => {
                    if(err) {
                        console.error(err); 
                    }
                    
                    else { 
                        eval(functionName)(seconderyResult.functionObject1.toString(), seconderyResult.functionObject2.toString());
                    }
                });
            }
    
            if(functionIndex in [1, 2, 4, 5, 6, 7])
            {
                functionName = actByInput(functionIndex);
                prompt.get(['functionObject'], (err, seconderyResult) => {
                    if(err) {
                        console.error(err); 
                    }
                    
                    else { 
                        console.log(seconderyResult.functionObject.toString());
                        eval(functionName)(seconderyResult.functionObject.toString());
                    }
                });
            }
    
            if(functionIndex == 9)
                process.exit();
        }
    });
}

function handleTextualUIStartMenu() {
    console.log("to delete file by name type 1.\n\
to create file by name type 2.\n\
to write text to a file type 3.\n\
to create folder by name type 4.\n\
to delete folder by name type 5.\n\
to create a file in a dictionary type 6.\n\
to delete a file from a dictionary type 7.\n\
to merge files type 8.\n\
to exit the system type 9.\n");
}

function deleteFileByName(file) {
    fs.unlinkSync(file, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function createFileByName(file) {
    fs.appendFileSync(file, "", (err) => {
        if (err)
            console.log(err);
        else {
          console.log(`file ${file} was created.`);
        }
    });
}

function writeToFile(file, text) {
    fs.appendFileSync(files, text, (err) => {
        if (err)
            console.log(err);
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
        if (err)
            console.log(err);
        else {
          console.log(`folder ${folder} was created.`);
        }
	});
}

function deleteFileByNameFromFolder(filePath) {
    fs.unlinkSync(filePath, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`success!!!`);
        }
    });
}

function createFileByNameFromFolder(filePath) {
    fs.appendFileSync(filePath, "", (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`success!!!`);
        }
    });
}

async function mergeFiles(file1, file2) {
    await promises.readFileSync(file2, (err, content) => { // read
        if (err)
            console.log(err);
        else {
            console.log("file was read.");
        }

        fs.appendFileSync(file, content, (err) => {
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
}