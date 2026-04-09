
document.getElementById('do').onclick = function() {

    var nama = document.getElementById('nama').value;
		if (nama===""){
	nama="(nama kok kosong)";
	}
    var Kel = document.getElementById('nkel').value;
		if (Kel===""){
	Kel="(Kelas kok kosong)";
	}
    var gender = "";
    var g = document.getElementsByName('k');
    for (var i = 0; i < g.length; i++) {
        if (g[i].checked) {
            gender = g[i].value;
        }
    }

var extra = "";
var u = document.getElementsByName('bb');

for (var i = 0; i < u.length; i++) {
    if (u[i].checked) {
        extra += u[i].value + " ";
    }
}

    var wak = "";
    var t = document.getElementsByName('p');
    for (var i = 0; i < t.length; i++) {
        if (t[i].checked) {
            wak = t[i].value;
        }
    }
	
    document.getElementById('hasil').innerHTML =
        "Nama            : " + nama +
        "\nKelas         : " + Kel +
        "\nJenis Kelamin : " + gender +
        "\nExtracuriculer: " + extra +
        "\nJadwal        : " + wak;
};
