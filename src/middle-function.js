function externalFoo() {
    externalBar();
}

function externalBar() {
    externalBaz();
}

function externalBaz() {
    someException();
}

function externalException() {
    // throw an exception
    throw new Error("This is an exception");
}

externalFoo();
