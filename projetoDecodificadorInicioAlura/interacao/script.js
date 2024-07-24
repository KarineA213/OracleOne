var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cifraDeCesar(text, shift) {
    if (!text) {
        console.error("Texto indefinido");
        return '';
    }

    var resultado = '';
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();

        var index = alfabeto.indexOf(char);
        if (index !== -1) {
            var newIndex = (index + shift + alfabeto.length) % alfabeto.length;
            var newChar = alfabeto[newIndex];
            
            console.log(`char: ${char}, index: ${index}, newIndex: ${newIndex}, newChar: ${newChar}`);
            
            resultado += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            resultado += char;
        }
    }
    return resultado;
}




function criptografar() {
    var inputTexto = document.getElementById('input-texto').value;
    var textoCifrado = cifraDeCesar(inputTexto, 3);



    document.querySelector('.msg-output h2').innerText = textoCifrado;
    document.getElementById('output-image').style.display = 'none';
    document.getElementById('copy-link').style.display = 'block';

    if (!text) {
        console.error("Texto indefinido");
        return '';
    }

    

}

function descriptografar() {
    var inputTexto = document.getElementById('input-texto').value;
    var textoDecifrado = cifraDeCesar(inputTexto, -3);


    document.querySelector('.msg-output h2').innerText = textoDecifrado;
    document.getElementById('output-image').style.display = 'none';
    document.getElementById('copy-link').style.display = 'block';
}

function copy() {
  
    var textoDecifrado = document.getElementById('output-text');
    if (textoDecifrado && textoDecifrado.textContent) {
        
        var tempTextarea = document.createElement('textarea');
        tempTextarea.value = textoDecifrado.textContent;
        document.body.appendChild(tempTextarea);

        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        alert('Texto copiado para a área de transferência!');
    } else {
        alert('Nada para copiar!');
    }
}
