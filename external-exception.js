function externalFoo() {
    externalBar();
}

function externalBar() {
    externalBaz();
}

function externalBaz() {
    externalException();
}

function externalException() {
    // throw an exception
    throw new Error("This is an exception");
}

externalFoo();
