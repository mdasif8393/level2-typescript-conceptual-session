// null
const myText = (text: string | null): void => {
    if(text === null){
        console.log(" I have no text");
    }
    else{
        console.log(text);
    }
}

myText(null);
myText("This is not a null value");

// Unknown type
const guessSomething = (myGuess: unknown): void => {
    console.log(myGuess);
}

guessSomething(23);
guessSomething("Hello");
guessSomething(null);

