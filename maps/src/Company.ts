import faker from 'faker'

export class Company{

    companyName: string;
    catchPhrase: string;
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),

        }
    }

    stringify(){

        return `name: ${this.companyName}<br/>Moto: ${this.catchPhrase}<br/>Position: ${this.location.lat},${this.location.lng}`
        
    }
}