let fn = Math.floor(Math.random() * 10);
console.log("Sequencia fibonacci de " + fn);
if (fn == 0) {
    console.log("0");
} else {
        console.log("0");
        console.log("1");
    let resultadoAtual = 1;
    let resultadoAnterior = 0;
    do {
        resultadoAtual = resultadoAtual + resultadoAnterior;
        resultadoAnterior = resultadoAtual - resultadoAnterior;
        if (resultadoAtual <= fn) {
            console.log(resultadoAtual);
        }
    } while (resultadoAnterior < fn)
}


