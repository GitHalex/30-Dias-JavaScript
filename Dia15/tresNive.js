class Statistics {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }

  // Contar elementos
  count() {
    return this.data.length;
  }

  // Suma total
  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  // Valor mínimo
  min() {
    return Math.min(...this.data);
  }

  // Valor máximo
  max() {
    return Math.max(...this.data);
  }

  // Rango (diferencia entre máximo y mínimo)
  range() {
    return this.max() - this.min();
  }

  // Media (promedio)
  mean() {
    return this.sum() / this.count();
  }

  // Mediana (valor central)
  median() {
    const mid = Math.floor(this.data.length / 2);
    return this.data.length % 2 !== 0
      ? this.data[mid]
      : (this.data[mid - 1] + this.data[mid]) / 2;
  }

  // Moda (valor más frecuente)
  mode() {
    const frequencyMap = {};
    let maxCount = 0;
    let modeValue = null;

    this.data.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxCount) {
        maxCount = frequencyMap[num];
        modeValue = num;
      }
    });

    return { mode: modeValue, count: maxCount };
  }

  // Varianza
  variance() {
    const mean = this.mean();
    const squaredDifferences = this.data.map((num) => Math.pow(num - mean, 2));
    return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.count();
  }

  // Desviación estándar
  std() {
    return Math.sqrt(this.variance());
  }

  // Distribución de frecuencias
  freqDist() {
    const frequencyMap = {};

    // Contar frecuencias
    this.data.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    // Calcular porcentajes y ordenar
    const total = this.count();
    const result = Object.entries(frequencyMap)
      .map(([value, count]) => ({
        value: parseInt(value),
        count: count,
        percentage: (count / total) * 100,
      }))
      .sort((a, b) => {
        // Ordenar por porcentaje descendente, luego por valor ascendente
        if (b.percentage !== a.percentage) {
          return b.percentage - a.percentage;
        }
        return a.value - b.value;
      });

    // Formatear como array de tuplas (porcentaje, valor)
    return result.map((item) => [item.percentage, item.value]);
  }

  // Método para mostrar todas las estadísticas
  describe() {
    const mode = this.mode();

    console.log("Count:", this.count());
    console.log("Sum: ", this.sum());
    console.log("Min: ", this.min());
    console.log("Max: ", this.max());
    console.log("Range: ", this.range());
    console.log("Mean: ", this.mean());
    console.log("Median: ", this.median());
    console.log("Mode: ", `(${mode.mode}, ${mode.count})`);
    console.log("Variance: ", this.variance());
    console.log("Standard Deviation: ", this.std().toFixed(1));
    console.log("Frequency Distribution: ", this.freqDist());
  }
}

// Ejemplo de uso
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);

// Probando los métodos individualmente
console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 29.76 (redondeado a 30 en el ejemplo)
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {mode: 26, count: 5}
console.log("Variance: ", statistics.variance()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.1833...
console.log("Frequency Distribution: ", statistics.freqDist());

// Mostrar todas las estadísticas
console.log("\n--- Todas las estadísticas ---");
statistics.describe();
