function codificar(){
	let cifraCesar = document.getElementById("cesar").checked;
	let base64 = document.getElementById("L64").checked;
	let parametro = parseInt(document.getElementById("parametroCesar").value);
	if (cifraCesar == true) {
        let codigo= "";
        let texto = document.getElementById("input").value;
        let intexto = removeEste(texto);
        for (let i = 0; i < intexto.length; i++) {
            let estCode = intexto[i];
            let charCodificado = String.fromCharCode((estCode.charCodeAt(0) + parametro + 65) - 65);
            codigo += charCodificado;
        }
        document.getElementById("descript").value = codigo;
    }
	if (base64 == true) {
        let intexto2 = document.getElementById("input").value;
        let intexto3 = removeEste(intexto2);
        let textoCod = btoa(intexto3);
        document.getElementById("descript").value = textoCod;
    }
}

function descodificar() {
    let cifraCesar = document.getElementById("cesar").checked;
    let base64 = document.getElementById("L64").checked;
    if (cifraCesar == true) {
        let parametro = parseInt(document.getElementById("parametroCesar").value);
        let desco = "";
        let intexto = document.getElementById("descript").value;
        for (let i = 0; i < intexto.length; i++) {
            let charCodeDescod = intexto[i];
            let chardesco = String.fromCharCode((charCodeDescod.charCodeAt(0) - parametro - 65) + 65);
            desco += chardesco;
        }
        document.getElementById("descript").value = desco;
    }

    if (base64 == true) {
        let descodificar = document.getElementById("descript").value;
        let atalho = atob(descodificar);
        document.getElementById("descript").value = atalho;
    }

}

function base() {
    var opera = document.getElementById("parametroCesar");
    opera.style.visibility = "hidden";
}

function cc() {
    var jazz = document.getElementById("parametroCesar");
    jazz.style.visibility = "visible";
}

function removeEste(texto) {
    return texto.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}

