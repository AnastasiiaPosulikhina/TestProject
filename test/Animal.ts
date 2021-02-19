export class Animal {
    name: string;
    constructor(Name: string) {
        this.name = Name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}