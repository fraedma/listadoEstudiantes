class persona {
  constructor(nombre,apellidos,edad,profesion,ciudad,nota1,nota2) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.profesion = profesion;
    this.ciudad = ciudad;
    this.nota1 = parseFloat(nota1);
    this.nota2 = parseFloat(nota2); 
  }


  get_nombre() {
    return this.nombre;
  }

 get_apellidos() {
      return this.apellidos;
    }

 get_edad(){
      return this.edad;
    }
 get_profesion(){
      return this.profesion;
    }
 get_ciudad(){
      return this.ciudad;
    }
 get_nota1(){
      return this.nota1;
    }
 get_nota2(){
      return this.nota2;
    }

 notafinal(){
  return (this.nota1+this.nota2)/2;
 }

}

class estudiantes{
 constructor() {
    this.listEst = [];

  }
  get_listEst()
 {
   return this.listEst;
 }
 
 get_listEsts(x)
 {
   return this.listEst[x];
 } 
 
 put_listEst(est)
 {
   if(est.notafinal()<3){
    this.listEst.unshift(est);
   }
   else{
    this.listEst.push(est);
   }
 }
 
 get_n_listEst()
 {
   return this.listEst.length;
 }
 
}