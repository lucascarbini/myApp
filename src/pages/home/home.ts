import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coordenadas:string

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

  }
  
  ngOnInit(): void {
    this.obtenerUbicacion()
  }

  obtenerUbicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("ubicacion",resp)
      this.coordenadas="Coordenadas "+resp.coords.latitude+","+resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     /*let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log("ubicacion",data)
      // data.coords.latitude
      // data.coords.longitude
     });*/
  }

}
