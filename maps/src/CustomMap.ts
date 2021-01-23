import {User} from './User';
import {Company} from './Company';

interface locatable{

    location:{
        lat:number;
        lng:number;
    };

    stringify(): string;
}

export class CustomMap{

    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id),{
            zoom:1,
            center: {
                lat:0,
                lng:0
            }
        
         })}
         
    addMarker(obj: locatable): void{

        const m = new google.maps.Marker({map: this.googleMap, position:obj.location})
        const info = new google.maps.InfoWindow({
            content: obj.stringify()
        });
        m.addListener('click',()=>{
            info.open(this.googleMap,m)
        })


    }

}  
