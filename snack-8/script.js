const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
// Versione filter per trovare la classe 
const classeMarco = students.filter((studente)=>{
  return studente.name === 'Marco Lanci'
})
// Dato che ci restituisce un array con un oggetto metto tra le quadre l'indice 0 ovvero la sua posizione nell'array
console.log(classeMarco[0].class);

// Versione find per trovare la classe di Marco Lanci
const getClass = students.find((studente)=>{
    return studente.name === 'Marco Lanci'
})
console.log(getClass.class);
