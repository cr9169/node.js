const fsEx = require("fs-extra");
const { promises } = require("fs");
const fs = require("fs");
const { start } = require("prompt");

const srcdirectory = "./files_to_move";
const desdirectory = "./moved_files";

let isEmpty;

const cleanDirectory = async () => {

    isEmpty = await isEmptyDir(srcdirectory);

    if(!isEmpty)
    {
        fs.readdir(srcdirectory, (err, files) => {
            if (err) 
                console.error(err); 
            else {
                files.forEach(file => {
                    fsEx.move(srcdirectory + "/" + file, desdirectory + "/" + file, (err) => {
                        if (err) 
                            console.error(err);
                        else
                        {
                            console.log(file);
                            fs.appendFile(`moved_files.txt`, file + '\n', (err) => {
                                if (err)
                                    console.log(err);
                                else {
                                  console.log(`success!!!`);
                                }
                              });
                        }
                    });
                }) 
                }
        });
    }
};

fs.watch(srcdirectory, (event, name) => {

    cleanDirectory();
    if(event === 'changes')
    {
        setTimeout(
            cleanDirectory(),
            1000
        );
    }
});

async function isEmptyDir(path) {
  const entry = await promises.readdir(path);

  if (entry === null) return true;
  else return false;
}

//cleanDirectory();