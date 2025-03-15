class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    hablar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
    despedirse() {
        console.log(`adios ${this.nombre}`);
      }
  }

  let Ana = new Persona("Ana",15)
  let Manuel = new Persona("Manuel",12)
  let Elizabeth = new Persona("Elizabeth",22)
    Ana.hablar()
    Manuel.hablar()
    Elizabeth.hablar()
    Elizabeth.despedirse()

    class Estudiante extends Persona {
        constructor(nombre, edad, carrera) {
          super(nombre, edad);
          this.carrera = carrera;
        }
        estudiar() {
          console.log(`${this.nombre} está estudiando ${this.carrera}`);
        }
      }

      Elizabeth = new Estudiante("Elizabeth",22,"Ingenieria Sistemas")
      Elizabeth.estudiar()