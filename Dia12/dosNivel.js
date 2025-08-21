function tenMostFrequentWords(paragraph) {
  // 1. Extraer palabras usando regex
  const words = paragraph.match(/\b\w+\b/g);

  // 2. Contar ocurrencias
  const freq = {};
  words.forEach((word) => {
    let lower = word.toLowerCase();
    freq[lower] = (freq[lower] || 0) + 1;
  });

  // 3. Ordenar por frecuencia
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  // 4. Tomar los 10 primeros
  return sorted.slice(0, 10).map(([word, count]) => ({ word, count }));
}

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

function cleanText(sentence) {
  // 1. Limpiar texto (quitar símbolos)
  let cleaned = sentence.replace(/[^a-zA-Z\s]/g, "");

  // 2. Pasar a minúsculas y separar en palabras
  let words = cleaned.toLowerCase().split(/\s+/);

  // 3. Contar frecuencias
  let freq = {};
  words.forEach((word) => {
    freq[word] = (freq[word] || 0) + 1;
  });

  // 4. Ordenar y tomar las 3 primeras
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3).map(([word, count]) => ({ word, count }));
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));
