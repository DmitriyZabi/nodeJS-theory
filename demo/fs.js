import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create folder
/*
fs.mkdir(path.join(__dirname, 'test'), err => {
    if(err){
        throw err
    }
    console.log('Папка создана')
})
*/

// Create file

const filepath = path.join(__dirname, 'test', 'text.txt')
/*
fs.writeFile(filepath, 'Hello Node JS', err => {
    if(err){
        throw err
    }
    console.log('Файл создан')
})
*/
// Add to file
/*
fs.appendFile(filepath, '\nHello Node JS Again', err => {
    if(err){
        throw err
    }
    console.log('Файл модифицирован')
})
*/
// Read a file
fs.readFile(filepath, 'utf8', (err, content) => {
    if(err){
        throw err
    }
    /*const data = Buffer.from(content)
    console.log(content)
    console.log(data.toString())*/
    console.log(content)
})