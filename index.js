function displayMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello this is a promise message");
        },1000)
    })
}
displayMessage().then((message) => console.log(message));

const fs = require('fs').promises;
async function writeFileAsync(){
    try {
        await fs.writeFile('Hello.txt', 'Hi Nodejs File is created successfully.')
        console.log('file created successfully')
    } catch (error) {
        console.error('error while creating file', error)        
    }
}
writeFileAsync();
