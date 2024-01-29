import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { readFileSync } from 'fs';

// Acá van las credenciales de FireStore

//EDITAR SI ES NECESARIO//
//EDITAR SI ES NECESARIO//
const firebaseConfig = {
  apiKey: "", //COLOCAR ENTRE COMILLAS LA APIKEY DE FIREBASE Y MODIFICAR LOS OTROS VALORES
  authDomain: "wakeup-store.firebaseapp.com", //EDITAR!!!
  projectId: "wakeup-store", //EDITAR!!!
  storageBucket: "wakeup-store.appspot.com", //EDITAR!!!
  messagingSenderId: "58352480192", //EDITAR!!!
  appId: "1:58352480192:web:7ad3fc874be9bb47eaa225" //EDITAR!!!
};
//EDITAR SI ES NECESARIO//
//EDITAR SI ES NECESARIO//

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'productos'); //Editar la colección si corresponde. 

// Lee el json verificar que el nombre del archivo json sea correcto, sino modificar. 
const dataArray = JSON.parse(readFileSync('./data.json', 'utf8'));

// Acá hacer un loop por cada archivo y lo sube a la coleccion de referencia. 
dataArray.forEach(async (data) => {
  try {
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
