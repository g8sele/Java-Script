function podeDirigir(idade, cnh){
    if (idade>=18 && cnh==true) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não tem permissão de dirigir!"); 
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(15, false));