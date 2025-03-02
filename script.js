document.addEventListener('DOMContentLoaded', function() {
    const transformarBtn = document.getElementById('transformarBtn');
    transformarBtn.addEventListener('click', transformarRugido);
});

function transformarRugido() {
    const rugidoTransformado = document.getElementById('rugidoTransformado').value;
    const rugidoOriginal = reverterFeitico(rugidoTransformado);
    document.getElementById('resultado').textContent = `Rugido original: ${rugidoOriginal}`;
}

function reverterFeitico(rugido) {
    const vogais = {
        '1': 'a',
        '5': 'e',
        '9': 'i',
        '15': 'o',
        '21': 'u'
    };
    
    return rugido.replace(/(\d+)/g, match => vogais[match] || match);
}