function handleTextualUIStartMenu() {
    console.log(
      "to delete file by name type 1.\n\
  to create file by name type 2.\n\
  to write text to a file type 3.\n\
  to create folder by name type 4.\n\
  to delete folder by name type 5.\n\
  to create a file in a dictionary type 6.\n\
  to delete a file from a dictionary type 7.\n\
  to merge files type 8.\n\
  to exit the system type 9.\n"
    );
}

function actByInput(functionIndex) {
    if (functionIndex == 1) {
      console.log("enter file name to delete");
      return "deleteFileByName";
    }
    if (functionIndex == 2) {
      console.log("enter file name to create");
      return "createFileByName";
    }
    if (functionIndex == 3) {
      console.log(
        "enter the file name, press enter, and than enter \
  the content to write"
      );
      return "writeToFile";
    }
    if (functionIndex == 4) {
      console.log("enter folder name to create");
      return "createFolderByName";
    }
    if (functionIndex == 5) {
      console.log("enter folder name to delete");
      return "deleteFolderByName";
    }
    if (functionIndex == 6) {
      console.log("enter file path to create in a folder");
      return "createFileByNameFromFolder";
    }
    if (functionIndex == 7) {
      console.log("enter file path to delete from folder");
      return "deleteFileByNameFromFolder";
    }
    if (functionIndex == 8) {
      console.log(
        "enter the file name to merge to, press enter, \
  and than enter the file name to merge"
      );
      return "mergeFiles";
    }
}
  
export {handleTextualUIStartMenu, actByInput};