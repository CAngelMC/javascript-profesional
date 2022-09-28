// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

enum Color {
  rojo = "Rojo",
  verde = "Verde",
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return `Un rectangulo ${this.color}`;
};

console.log(rect.toString());
