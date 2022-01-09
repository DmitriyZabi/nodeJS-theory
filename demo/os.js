import os from 'os'

console.log('ОС', os.platform())
console.log('Архитектура процессора', os.arch())
console.log('Информация о ЦП', os.cpus())
console.log('Свободная память', os.freemem())
console.log('Всего памяти', os.totalmem())
console.log('Базовая директория', os.homedir())
console.log('Включен', os.uptime())