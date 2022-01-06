export class ClassEvent {

    constructor() {

        this._events = {}; //7) Cria-se uma variável chamada events

    }

    on(eventName, fn) {

        if (!this._events[eventName]) {
            this._events[eventName] = new Array();
        }
        this._events[eventName].push(fn)
    }

    trigger() {

        let args = [...arguments];
        let eventName = args.shift() //SHIFT remove o primeiro elemento de um array

        args.push(new Event(eventName))

        if (this._events[eventName] instanceof Array) {

            this._events[eventName].forEach(fn => {

                fn.apply(null, args)

            });
        }
    }
}