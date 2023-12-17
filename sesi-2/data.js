const nama = 'wisnu'
let usia = 50

function biodata(){
    let generasi;
    if(usia > 2 && usia < 12){
        generasi = 'Generasi anak anak'
    }else if(usia > 12 && usia < 20){
        generasi = 'Generasi remaja'
    }else if (usia >20 && usia <35) {
        generasi = 'Generasi dewasa'
    }else if (usia > 35) {
        generasi = 'Generasi tua'
    }else{
        generasi = 'masih bocah'
    }
    return console.log(`generasi saya adalah ${generasi}`)
}

biodata()