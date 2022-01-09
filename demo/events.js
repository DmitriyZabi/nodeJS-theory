import Events from 'events'

/*
const emitter = new Events()
emitter.on('anything', data => {
    console.log('ON: anything', data)
})

emitter.emit('anything', { a: 1 })
setTimeout(() => {
    emitter.emit('anything', { a: 2, b: 3 })
}, 1000)
*/

class Dispatcher extends Events {
    subscribe(event, callback){
        console.log('[Subscribe...]')
        this.on(event, callback)
    }

    dispatch(event, data){
        console.log('[Dispatching...]')
        this.emit(event, data)
    }
}

const disp = new Dispatcher()
disp.subscribe('event1', data => {
    console.log('ON: event1', data)
})

disp.dispatch('event1', { data: 1 })