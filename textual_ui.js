import prompt from "prompt";
import {handleTextualUIStartMenu, actByInputOneInput, actByInputTwoInputs} from './textual_ui_uiHandling.js';
import {deleteFileByName, createFileByName, writeToFile, deleteFolderByName,
     createFolderByName, deleteFileByNameFromFolder, createFileByNameFromFolder, mergeFiles} from './textual_ui_files_actions.js';

const functions = {
    deleteFileByName: 1,
    createFileByName: 2,
    writeToFile: 3,
    deleteFolderByName: 4,
    createFolderByName: 5,
    deleteFileByNameFromFolder: 6,
    createFileByNameFromFolder: 7,
    mergeFiles: 8
}

handleUI();

function handleUI() {
    
  let functionIndex;
  
  {
    handleTextualUIStartMenu();
    prompt.start();
    prompt.get(["Index"], (err, mainResult) => {
        if (err) {
        console.error(err);
        } 
        else {
        functionIndex = Number(mainResult.Index);
        console.log(functionIndex);

        if (functionIndex == functions.writeToFile || functionIndex == functions.mergeFiles) {
            actByInputTwoInputs(functionIndex);
            prompt.get(
            ["param1", "param2"],
            (err, seconderyResult) => {
                if (err) {
                console.error(err);
                } else {
                    switch (functionIndex) {
                        case 3: {
                        
                          writeToFile(seconderyResult.param1.toString(),
                            seconderyResult.param2.toString());
                            console.log(seconderyResult.param1.toString());
                            console.log(seconderyResult.param2.toString());
                            break;
                        }
                        case 8: {
                          
                          mergeFiles(seconderyResult.param1.toString(),
                            seconderyResult.param2.toString());
                            console.log(seconderyResult.param1.toString());
                            console.log(seconderyResult.param2.toString());
                            break;
                        }
                    }
                    handleUI();
                }
            }
            );
        }
        
        if ([functions.deleteFileByName, functions.createFileByName, functions.deleteFolderByName, functions.createFolderByName,
             functions.deleteFileByNameFromFolder, functions.createFileByNameFromFolder].includes(functionIndex)) {
            actByInputOneInput(functionIndex);
            prompt.get(["param"], (err, seconderyResult) => {
            if (err) {
                console.error(err);
            } 
            else {
                switch (functionIndex) {
                    case 1: {
                      
                      deleteFileByName(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                    case 2: {

                      createFileByName(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                    case 4: {

                      createFolderByName(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                    case 5: {

                      deleteFolderByName(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                    case 6: {

                      deleteFileByNameFromFolder(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                    case 7: {
                      createFileByNameFromFolder(seconderyResult.param.toString());
                      console.log(seconderyResult.param.toString());
                      break;
                    }
                }
                handleUI();
            }
            });
        } 
        
        if (functionIndex == 9) 
            process.exit();

        }
    });
  }}