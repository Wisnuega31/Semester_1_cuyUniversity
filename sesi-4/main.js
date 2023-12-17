function saklar() {
    // saklar ruang tidur
    let toggle_tidur = document.getElementById('toggle_tidur');
    let toggle_tidur1 = document.getElementById('toggle_tidur1');
    let toggle_tidur2 = document.getElementById('toggle_tidur2');

    // saklar ruang tamu
    let toggle_tamu = document.getElementById('toggle_tamu');
    let toggle_tamu1 = document.getElementById('toggle_tamu1');
    let toggle_tamu2 = document.getElementById('toggle_tamu2');
    let toggle_tamu3 = document.getElementById('toggle_tamu3');
    let toggle_tamu4 = document.getElementById('toggle_tamu4');

    // saklar ruang keluarga
    let toggle_keluarga = document.getElementById('toggle_keluarga');
    let toggle_keluarga1 = document.getElementById('toggle_keluarga1');
    let toggle_keluarga2 = document.getElementById('toggle_keluarga2');
    let toggle_keluarga3 = document.getElementById('toggle_keluarga3');

    // saklar ruang makan
    let toggle_makan = document.getElementById('toggle_makan');
    let toggle_makan1 = document.getElementById('toggle_makan1');

    // lampu ruang tidur
    let lampu_tidur1 = document.getElementById('lampu_tidur1');
    let lampu_tidur2 = document.getElementById('lampu_tidur2');

    // lampu ruang tamu
    let lampu_tamu1 = document.getElementById('lampu_tamu1');
    let lampu_tamu2 = document.getElementById('lampu_tamu2');
    let lampu_tamu3 = document.getElementById('lampu_tamu3');
    let lampu_tamu4 = document.getElementById('lampu_tamu4');

    // lampu ruang keluarga
    let lampu_keluarga1 = document.getElementById('lampu_keluarga1');
    let lampu_keluarga2 = document.getElementById('lampu_keluarga2');
    let lampu_keluarga3 = document.getElementById('lampu_keluarga3');

    // lampu ruang makan
    let lampu_makan1 = document.getElementById('lampu_makan1');

    // cek toggle ruang tidur
    if (toggle_tidur.checked) {
        lampu_tidur1.src = 'Images/on.gif';
        lampu_tidur2.src = 'Images/on.gif';
    } else {
        lampu_tidur1.src = 'Images/off.gif';
        lampu_tidur2.src = 'Images/off.gif';
    };
    if (toggle_tidur1.checked) {
        lampu_tidur1.src = 'Images/on.gif';
    };
    if (toggle_tidur2.checked) {
        lampu_tidur2.src = 'Images/on.gif';
    };

    // cek toggle ruang tamu
    if (toggle_tamu.checked) {
        lampu_tamu1.src = 'Images/on.gif';
        lampu_tamu2.src = 'Images/on.gif';
        lampu_tamu3.src = 'Images/on.gif';
        lampu_tamu4.src = 'Images/on.gif';
    } else {
        lampu_tamu1.src = 'Images/off.gif';
        lampu_tamu2.src = 'Images/off.gif';
        lampu_tamu3.src = 'Images/off.gif';
        lampu_tamu4.src = 'Images/off.gif';
    };
    if (toggle_tamu1.checked) {
        lampu_tamu1.src = 'Images/on.gif';
    };
    if (toggle_tamu2.checked) {
        lampu_tamu2.src = 'Images/on.gif';
    };
    if (toggle_tamu3.checked) {
        lampu_tamu3.src = 'Images/on.gif';
    };
    if (toggle_tamu4.checked) {
        lampu_tamu4.src = 'Images/on.gif';
    };

    // cek toggle ruang keluarga
    if (toggle_keluarga.checked) {
        lampu_keluarga1.src ='images/on.gif';
        lampu_keluarga2.src ='images/on.gif';
        lampu_keluarga3.src ='images/on.gif';
    }else{
        lampu_keluarga1.src ='images/off.gif';
        lampu_keluarga2.src ='images/off.gif';
        lampu_keluarga3.src ='images/off.gif';
    };
    if (toggle_keluarga1.checked) {
        lampu_keluarga1.src = 'images/on.gif';
    };
    if (toggle_keluarga2.checked) {
        lampu_keluarga2.src = 'images/on.gif';
    };
    if (toggle_keluarga3.checked) {
        lampu_keluarga3.src = 'images/on.gif';
    };

    // cek toggle ruang tidur
    if (toggle_makan.checked) {
        lampu_makan1.src = 'images/on.gif';
    } else {
        lampu_makan1.src = 'images/off.gif';
    };
    if (toggle_makan1.checked) {
        lampu_makan1.src = 'images/on.gif';
    };
}