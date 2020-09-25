
class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar(){
    return `Gua!!!! soy ${this.nombre}`;
  }
}

module.exports = Perro;