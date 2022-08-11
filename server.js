const http = require("http");
const { promises } = require('fs');
const fs = require('fs-extra');
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hellow world");
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    
    if(isEmptyDir("/files_to_move"))
        fs.unlink('file.txt', (err) => {
            if (err) {
                throw err;
            }
        
            console.log("File is deleted.");
        });
});





function isEmptyDir(path) {  
    try {
      const directory = await promises.opendir(path);
      const entry = await directory.read();
      await directory.close();

      return entry === null;
    } catch (error) {
      return false
    }
}