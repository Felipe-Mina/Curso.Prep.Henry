
function cortar(ingrediente) {
    console.log( 'cortar ' + ingrediente );
};

function mezclarIngredientes(n) {
    if(n <= 0) return;

    console.log( 'mezclar #' + n);
    mezclarIngrediente( n - 1 );
};

function comer() {
    console.log('comer');
};

function hacerEnsaladaMixta() {
    cortar('lechuga');
    cortar('tomate');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
}

hacerEnsaladaMixta();