//Crie um programa que leia dos números x e y indefinidamente até que um deles seja zero. Esses pontos devem representar a localização no plano cartesiano e o programa deve imprimir em qual quadrante o ponto se encontra.//

const prompt = require('prompt-sync')();
let x = 1;
let y = 1;
while (x != 0 && y != 0) {
  x = parseInt(prompt('Digite o valor de x: '));
  y = parseInt(prompt('Digite o valor de y: '));
  if (x > 0 && y > 0) {
    console.log(`Primeiro quadrante.`);
  } else if (x < 0 && y > 0) {
    console.log(`Segundo quadrante.`);
  } else if (x < 0 && y < 0) {
    console.log('Terceiro quadrante.');
  } else if (x > 0 && y < 0) {
    console.log(`Quarto quadrante.`);
  }else if (x==0){
      console.log(`EIXO X`);
    }
    else if (y==0){
       console.log(`EIXO Y`);
    }
  else if (x === 0 || y === 0) {
    console.log("Origem");
  }
}