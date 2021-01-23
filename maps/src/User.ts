import faker from 'faker'

export var red = 'red color'

export class User{
    name: string;
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),

        }
    }

    stringify(){
        return `name: ${this.name}<br/>Position: ${this.location.lat},${this.location.lng}`
    }
}

