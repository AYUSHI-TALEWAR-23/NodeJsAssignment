function displayMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello this is a promise message");
        },1000)
    })
}
displayMessage().then((message) => console.log(message));