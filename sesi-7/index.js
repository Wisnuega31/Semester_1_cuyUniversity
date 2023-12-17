const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = 3001;

// request data masuk dari luar/client
// response data keluar dari server
const server = http.createServer(function (request, response) {
    const nama = "Wisnu Ega";
    let uang = 500000;
    let jajan = 130000;
    let sisa = uang - jajan;

uang = rupiah.convert(uang);
jajan = rupiah.convert(jajan);
sisa = rupiah.convert(sisa)

    const hasil = `
    <head>
    <title>${nama}</title>
    </head>
    <body>
    <h1 style="background-color:black;color:white;padding:20px;text-align:center;">Sesi-7 cuyUniversity</h1>
    <p>Halo nama saya ${nama}, saya tadi jajan sebanyak ${jajan}. Uang saya tadi ada ${uang} sekarang jadi ${sisa}</p>
    </body>
    `;

    response.end(hasil);
});

server.listen(port, host, "", function () {
    console.log(`server berjalan di ${host}:${port}`);
});