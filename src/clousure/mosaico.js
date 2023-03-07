/* Este ejemplo de clousure lo tome de los comentarios
de la clase 9/13 del curso de Clousures y scope en JS
Comentario hecho por kevin-zavala
https://platzi.com/comentario/3776361/

*/

function mosaico() {
  const figuras = [];

  function pintar(nuevaFigura) {
    figuras.push(nuevaFigura);

    let resultado = '';
    const mainLength = figuras.length * 2;
    
    for (let fila = 0; fila < mainLength; fila++) {

      for(let columna = 0; columna < mainLength; columna++) {
        const valorMax = fila > columna ? fila : columna;
        const valorMin = fila < columna ? fila : columna;

        const valorPosible = mainLength - (valorMax + 1);

        const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
        

        resultado += `${figuras[indexFigura]} `;
      }
      resultado += '\n';
    }
    return resultado;
  }

  return pintar;

}

const m = mosaico();
console.log(m('*'));
console.log(m('o'));
console.log(m('+'));
console.log(m('x'));