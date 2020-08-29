
const notes = [
    {
        id: "e7312fc0-ce78-11ea-87d0-0242ac130003",
        title: "Something goes here!",
        text: "Some important text",
    },
    {
        id: "e73132d6-ce78-11ea-87d0-0242ac130003",
        title: "Another thing!",
        text: "Some important text"
    },
    {
        id: "e73133da-ce78-11ea-87d0-0242ac130003",
        title: "Thing 3!",
        text: "Some important text"
    },
    {
        id: "e73134ac-ce78-11ea-87d0-0242ac130003",
        title: "Thing 3!",
        text: "Some important text"
    },
    {
        id: "e73134ac-ce78-11ea-87d0-0242ac130003",
        title: "Thing 3!",
        text: "Some important text"
    }
]



const appendedNotes = notes.map(elem => {
    // return {
    //     id: elem.id,
    //     title: elem.title,
    //     text: elem.text,
    //     author: "Frank Sinatra"
    // }

    return {
        ...elem,
        title: "New Title",
        authorTitle: `${elem.title} - ${elem.id}`
    }

})


const defaultConfig = {
    option1: "",
    option2: 0,
}

const config = { ...defaultConfig, option2: 2 };
const config2 = { ...defaultConfig, option1: "someVal" }

const filtered = [...notes].filter((elem) => elem.title !== "Thing 3");

console.log(notes);
console.log("------");
// console.log(appendedNotes);
console.log("----------------")
console.log(filtered);

function myFunc(arg1, arg2, arg3, arg4, ...other) {
    console.log(other);
    return arg1 + arg2 + arg3 + arg4;
}

myFunc(1, 2, 43, 45)