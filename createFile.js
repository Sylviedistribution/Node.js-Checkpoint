const fs = require("fs")

function createFile() {
    fs.writeFile('welcome.txt', 'Hello Node', function (err) {
        if (err) {
            return console.error(err);
        }

        console.log("Data written successfully!");
        console.log("Let's read newly written data");


    });

}

function readFile(pathname){
    fs.readFile(pathname, 'utf8', function(err, data) {
        if (err) {
            return console.error('Read error:', err.message);
        }
        console.log('File content:');
        console.log(data);
    });
}

if (require.main === module) {
    // when run directly, create welcome.txt then attempt to read hello.txt
    createFile();
    // try reading hello.txt if it exists
    readFile('hello.txt');
}