const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti. 
// filtro le zucchine con la lunghezza uguale o maggiore a 15
const length15cm = zucchine.filter((zucchina)=>{
  return zucchina.length >= 15
})
console.log("Ecco le zucchine lunghe almeno 15cm: ", length15cm);

// filtro le zucchine restanti ovvero con la lunghezza minore da 15 cm
const restoZucchine = zucchine.filter((zucchina)=>{
  return zucchina.length < 15
})
console.log("Le zucchine restanti sono: ", restoZucchine)
