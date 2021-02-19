import {Animal} from './Animal'

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    bark() {
        console.log("Woof! Woof!");
    }
}
