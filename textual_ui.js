import prompt from "prompt";

import {handleTextualUIStartMenu, actByInput} from './textual_ui_uiHandling.js';
import {deleteFileByName, createFileByName, writeToFile, deleteFolderByName,
     createFolderByName, deleteFileByNameFromFolder, createFileByNameFromFolder, mergeFiles} from './textual_ui_files_actions.js';

handleUI();

function handleUI() {
  let functionName;
  let functionIndex;
  
  { // TODO: make can repeat itself 
    handleTextualUIStartMenu();
    prompt.start();
    prompt.get(["Index"], (err, mainResult) => {
        if (err) {
        console.error(err);
        } 
        else {
        functionIndex = Number(mainResult.Index); // this performed first, and than going to the ifs
        console.log(functionIndex);

        if (functionIndex == 3 || functionIndex == 8) {
            functionName = actByInput(functionIndex);
            prompt.get(
            ["functionObject1", "functionObject2"],
            (err, seconderyResult) => {
                if (err) {
                console.error(err);
                } else {
                eval(functionName)(
                    seconderyResult.functionObject1.toString(),
                    seconderyResult.functionObject2.toString()
                );
                }
            }
            );
        }
        
        if ([1, 2, 4, 5, 6, 7].includes(functionIndex)) {
            functionName = actByInput(functionIndex);
            prompt.get(["functionObject"], (err, seconderyResult) => {
            if (err) {
                console.error(err);
            } 
            else {
                console.log(seconderyResult.functionObject.toString());
                eval(functionName)(seconderyResult.functionObject.toString());
                handleUI();
            }
            });
        } 
        
        if (functionIndex == 9) 
            process.exit();

        }
    });
  }}