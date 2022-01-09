import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('Название файла: ', path.basename(__filename))
console.log('Название директории: ', path.dirname(__filename))
console.log('Расширение файла: ', path.extname(__filename))
console.log('Parse файла: ', path.parse(__filename))
console.log(path.join(__dirname, 'server', 'index.js'))