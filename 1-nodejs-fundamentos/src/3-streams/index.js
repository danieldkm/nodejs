// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserção no banco de dados

// 10mb/s -> 10.000

// Readable Streams / Writable Streams

// Apenas uma correção:

// Referente aos 10Mb de transferência, ao invés de Mega Bytes, quando é taxa de transferência de internet e roteadores, é Megabits.

// Então é 1024 * 8 / 10, que ao invés de 102,4 segundos, seria 819,2 segundos.

// Que ao invés de 1 minuto e 42 segundos, vai pra 13 minutos e 40 mais ou menos.

// Agradecimentos ao Lucas Estevam Nogueira De Queiroz.

// Streams ->

// Toda entrada no node é um stream no http o req e res são

// import './1-std.js'
// import './2-readable.js'
import './3-writable-transform.js'
import './4-buffer.js'