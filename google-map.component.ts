import { MapdemoComponent } from './mapdemo/mapdemo.component';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  @Output() SelectedLatLng = new EventEmitter<any>();
  @Input() ApiKey: string;
  @Input() MapCenter = {lat: 0 , lng: 0};

  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {}

  getLocation()
{
  this.modalCtrl.create({component: MapdemoComponent,
     componentProps: {myLatLong: this.MapCenter, Key: this.ApiKey}})
     .then(el => {
       el.present();
       return el.onDidDismiss();
      }).then(el2 => {
        this.SelectedLatLng.emit(el2.data);
      });
}
}
