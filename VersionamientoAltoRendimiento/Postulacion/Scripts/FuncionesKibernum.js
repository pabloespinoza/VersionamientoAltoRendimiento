function volver() {
    javascript:window.history.back();
}


function verifica_rut(oRut) {
    var rut_numero = new String();
    var lacadena = new String();
    var numr = new String();
    lacadena = oRut.value;
    t2 = 0;
    if (lacadena.length == 0) {
        return false;
    }
    for (i = 0; i < lacadena.length; i++) {
        t2 = 1;
        if (!(lacadena.charAt(i) == '.' || lacadena.charAt(i) == ' ' || lacadena.charAt(i) == '-')) {
            numr += lacadena.charAt(i);
        }
    }
    for (i = 0; i < numr.length; i++) {
        if (i < numr.length - 1) {
            rut_numero += numr.charAt(i);
        }
        else {
            rut_dv = numr.charAt(i);
        }
    }
    if (isNaN(rut_numero)) {
        alert('Ingrese el RUT nuevamente, contiene caracteres no validos');
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }
    if (rut_numero>50000000){
    //if (rut_numero < 10000) {
        alert('El RUT ingresado no es válido para personas naturales');
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }
    if (isNaN(rut_dv)) {
        if (rut_dv == 'k')
            rut_dv = 'K';
        if (rut_dv != 'K') {
            alert('Ingrese el RUT nuevamente, el digito verificador no es un caracter valido');
            oRut.focus();
            oRut.select();
            return false;
        }
    }
    if (!verificarDvYR(rut_numero, rut_dv)) {
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }
    oRut.value = reconstruye(rut_numero, rut_dv);
    return true
}
function verifica_largo_rut(oRut) {
    var rut_numero = new String();
    var lacadena = new String();
    var numr = new String();
    lacadena = oRut.value;
    t2 = 0;
    if (lacadena.length == 0) {
        return false;
    }
    if (lacadena.length < 6) {
        alert('Ingrese el RUT nuevamente, no se reconoce como RUT válido');
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }
    for (i = 0; i < lacadena.length; i++) {
        t2 = 1;
        if (!(lacadena.charAt(i) == '.' || lacadena.charAt(i) == ' ' || lacadena.charAt(i) == '-')) {
            numr += lacadena.charAt(i);
        }
    }
    for (i = 0; i < numr.length; i++) {
        if (i < numr.length - 1) {
            rut_numero += numr.charAt(i);
        }
        else {
            rut_dv = numr.charAt(i);
        }
    }
    if (isNaN(rut_numero)) {
        alert('Ingrese el RUT nuevamente, contiene caracteres no validos');
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }
    if (rut_numero > 50000000) {
        //if (rut_numero < 10000) {
        alert('El RUT ingresado no es válido para personas naturales');
        oRut.value = '';
        oRut.focus();
        oRut.select();
        return false;
    }    
}
function verificarDvYR(n, d) {
    largo = n.length
    j = 2
    suma = 0
    while (largo > 0) {
        suma = suma + n.charAt(largo - 1) * j
        if (j < 7)
            j++
        else
            j = 2
        largo = largo - 1
    }
    resto = suma % 11
    if (resto == 1)
        dvc = 'K'
    else if (resto == 0)
        dvc = 0
    else {
        dvi = 11 - resto
        dvc = dvi
    }
    if (d != dvc) {
        alert('Ingrese el RUT nuevamente, es incorrecto')
        return false
    }
    return true
}
function reconstruye(n, d) {
    rut_nuevo = new String()
    rut_nuevo += '' + d
    j = 1
    for (i = n.length - 1; i >= 0; i--) {
        if (j == 4) {
            rut_nuevo = n.charAt(i) + '' + rut_nuevo
            j = 2
        }
        else {
            rut_nuevo = n.charAt(i) + rut_nuevo
            j++
        }
    }
    return rut_nuevo
}


function permite(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";

    var guion = "-";
    var K = "Kk";
    var arroba = "@";
    var punto = ".";
    var underline = "_";
    var slash = "/";

    var rut = numeros + guion + K;
    var texto = numeros + letras + underline + guion + punto;
    var email = texto + arroba + punto + guion + underline;
    var fecha = numeros + slash;

    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha    
    var teclas_especiales = [8, 9, 37, 39, 46, 116];

    // Seleccionar los caracteres a partir del parámetro de la función
    switch (permitidos) {
        case 'numeros':
            permitidos = numeros;
            break;
        case 'letras':
            permitidos = letras;
            break;
        case 'texto':
            permitidos = texto;
            break;
        case 'rut':
            permitidos = rut;
            break;
        case 'email':
            permitidos = email;
            break;
        case 'fecha':
            permitidos = fecha;
            break;
    }

    // Obtener la tecla pulsada 
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    var tecla_especial = false;
    for (var i in teclas_especiales) {
        if (codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
    //return permitidos.indexOf(caracter) != -1 && tecla_especial == false;
    return permitidos.indexOf(caracter) != -1;
}


function activarRut() {
    document.getElementById("benRutBeneficiario").setAttribute("onchange", "return verifica_rut(this); return false;");
    document.getElementById("benRutBeneficiario").setAttribute("onkeypress", "return permite(event, 'rut'); return false;");
    document.getElementById("benRutBeneficiario").setAttribute("data-toggle", "tooltip");
    document.getElementById("benRutBeneficiario").setAttribute("title", "Rut sin puntos ni guión");
    document.getElementById("benRutBeneficiario").setAttribute("data-placement", "right");
    document.getElementById("benRutBeneficiario").setAttribute("placeholder", "12345678K");
    $("#benRutBeneficiario").val("");
    $("#btnValidar").show();
    $("#divNacionalidad").hide();
    $("label[for = lblRutPasaporte]").text("Rut");
    $("label[for = formatoRut]").text("(Rut sin puntos ni guión)");

}
function desactivarRut() {
    document.getElementById("benRutBeneficiario").removeAttribute("onchange");
    document.getElementById("benRutBeneficiario").setAttribute("placeholder", "");
    document.getElementById("benRutBeneficiario").setAttribute("onkeypress", "return permite(event, 'texto'); return false;");
    document.getElementById("btnValidar").setAttribute("style", "display:none;"); 
    $("#btnValidar").hide();
    $("#divNacionalidad").show();
    $("label[for = lblRutPasaporte]").text("Pasaporte");
    $("label[for = formatoRut]").text("");  
    document.getElementById("benNombre").removeAttribute("readonly");
    document.getElementById("benApellidoPaterno").removeAttribute("readonly");
    document.getElementById("benApellidoMaterno").removeAttribute("readonly");
    document.getElementById("benFechaNacimiento").removeAttribute("readonly");
    document.getElementById("rdbFemenino").removeAttribute("disabled");
    document.getElementById("rdbMasculino").removeAttribute("disabled");

}
function format(input) {
    var num = input.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = num;
    }

    else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}
//$(document).ready(function () {
//    $("button").on("click", function () {
//        alert("1<vzxv")
//        alert($(this).text());

//        if ($(this).text().toUpperCase() == "Guardar".toUpperCase() || $(this).text().toUpperCase() == "Aceptar".toUpperCase()) {
//            $(this).attr("disabled", "disabled");
//        }
//    });

//    $("input[type=submit]").on("click", function () {
//        alert("2<vzxv")
//        alert($(this).val());

//        if ($(this).val().toUpperCase() == "Guardar".toUpperCase() || $(this).val().toUpperCase() == "Aceptar".toUpperCase()) {
//            $(this).attr("disabled", "disabled");
//        }
//    });

//    $("input[type=button]").on("click", function () {
//        alert("3<vzxv")
//        alert($(this).val());

//        if ($(this).val().toUpperCase() == "Guardar".toUpperCase() || $(this).val().toUpperCase() == "Aceptar".toUpperCase()) {
//            $(this).attr("disabled", "disabled");
//        }
//    });
//});