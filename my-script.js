function externalFoo() {
    externalBar();
}

function externalBar() {
    externalBaz();
}

function externalBaz() {
    externalHang();
}

function externalHang() {
    while (true) {}
}

externalFoo();
