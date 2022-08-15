import fsEx from "fs-extra";
import promises from "fs/promises";
import fs from "fs";

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
  const entry = await promises.readdir(path).then(() =>
  console.log(
    `${numberOfWords * i} words successfuly written in file_${i}`
  )
)
.catch((err) => {
  console.log(err);
});;

  return entry === null;
}