const promises = require('fs'); 
const prompt = require('prompt');

prompt.start();

prompt.get(['numberOfFiles', 'numberOfWords'], (err, result) => {

    if(err) {
        console.error(err); 
    }
    
    else {
        createFiles(Number(result.numberOfFiles), Number(result.numberOfWords));
    }
});

async function createFiles(numberOfFiles, numberOfWords) { // get imnput from teminal!!!!!

    const randomWords = require('random-words');
    numberOfWords;
    let string = "";

    for(let i = 1; i <= numberOfFiles; i++) {
        string = "";
        let content = randomWords(numberOfWords*i).join(" ");
                
        await promises.writeFile(`created_files/file_${i}.txt`, content, (err) => {
            if (err) 
                console.log(err);
            else
            {
                console.log(`${numberOfWords*i} words successfuly written in file_${i}`);
            }
        });
    }
}