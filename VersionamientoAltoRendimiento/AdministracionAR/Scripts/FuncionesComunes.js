function DevuelveMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
    }
}

function formatearMiles(input) {
    var numeroMiles = input.value.replace(/\.|\,|\$|\s/g, '');//.replace(/\,/g, "").replace("$", "").replace(/\s/g,"");
    if (!isNaN(numeroMiles)) {
        numeroMiles = numeroMiles.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        numeroMiles = numeroMiles.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = numeroMiles;
    }
    else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}