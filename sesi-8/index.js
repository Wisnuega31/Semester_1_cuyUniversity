let panjangPassword = document.getElementById('panjangPassword');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generate(panjang) {
    const lowerAlpabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlpabet = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const simbol = "@#&*_-!?.,|~";

    const data = lowerAlpabet + upperAlpabet + number + simbol;
    let generate = '';
    for (let index = 0; index < panjang; index++) {
        generate += data[~~(Math.random() * data.length)];
    };
    console.log('generator :', generate);

    return generate;
}

function getPassword() {
    const newPassword = generate(panjangPassword.value);
    password.value = newPassword;
}

const savePassword = () => {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`));
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
}