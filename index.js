//**Iteración #1: Usa includes**

//const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
 
//for (const product of products) {
//  if (product.includes("camiseta")) {
 //   console.log(product);
  //}
//}

//**Iteración #2: Condicionales avanzados**
const alumns = [
    {
      name: 'Pepe Viruela', 
      T1: false, 
      T2: false, 
      T3: true
    },

		{
      name: 'Lucia Aranda', 
      T1: true, 
      T2: false, 
      T3: true
    },

		{
      name: 'Juan Miranda', 
      T1: false, 
      T2: true, 
      T3: true
    },

		{
      name: 'Alfredo Blanco', 
      T1: false, 
      T2: false, 
      T3: false
    },

		{
      name: 'Raquel Benito', 
      T1: true, 
      T2: true, 
      T3: true
    }
]

//alumns.forEach(function (alumn, index, array) {
//console.log(alumns);
//});

//const newArrayAlumns = alumns.map(function(alumn, index, array){
 // let newAlumn = alumn;
  //newAlumn.isApproved = alumn.nota 
  //if (alumn.T1 === true || alumn.T2 === true) && (alumn.T1 === true || alumn.T3 === true) && (alumn.T2 === true || alumn.T3 === true) {
   
   // newAlumn.isApproved = true; 
  // } else {
  //   newAlumn.isApproved = false;
  // }
  //   return newAlumn;
  //   
  //});
  
  //console.log (newArrayAlumns);

//Iteración #3: Probando For...of//

//for (const value of placesToTravel) {
  //const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
  //console.log(value);
//}


//Iteración #4: Probando For...in

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

//for (const key in alien) {
  //console.log(alien[key]);
        
  //  };

   //Iteración #5: Probando For

   const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

   for (let index = 0; index < placesToTravel.length; index++) {

  console.log(placesToTravel);
  const element = placesToTravel[index];
  placesToTravel.splice[id,1];
    console.log(element);
    };



