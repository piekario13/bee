var płótno = document.getElementById("plotno");
var kontekst = płótno.getContext("2d");

var okrąg = function (x, y, promień, wypełnijOkrąg) {
    kontekst.beginPath();
    kontekst.arc(x, y, promień, 0, Math.PI * 2, false);
    if (wypełnijOkrąg) {
        kontekst.fill();
    } else {
        kontekst.stroke();
    }
};

var rysujpszczole = function (x, y) {
    kontekst.lineWidth = 2;
    kontekst.strokeStyle = "black";
    kontekst.fillStyle = "Gold";

    okrąg(x, y, 8, true);
    okrąg(x, y, 8, false);
    okrąg(x - 5, y - 11, 5, false);
    okrąg(x + 5, y - 11, 5, false);
    okrąg(x - 2, y - 1, 2, false);
    okrąg(x + 2, y - 1, 2, false);
};

var aktualizuj = function (wspolrzedna) {
    var przesuniecie = Math.random() * 4 - 2;
    wspolrzedna += przesuniecie;

    if  (wspolrzedna > 600) {
        wspolrzedna = 600;
    }
    if (wspolrzedna < 0) {
        wspolrzedna = 0;
    }

    return wspolrzedna;
};

var x = 100;
var y = 100;

setInterval(function () {
    kontekst.clearRect(0, 0, 600, 600);

    rysujpszczole(x, y);
    x = aktualizuj(x);
    y = aktualizuj(y);

    kontekst.strokeRect(0, 0, 600, 600);
}, 30);