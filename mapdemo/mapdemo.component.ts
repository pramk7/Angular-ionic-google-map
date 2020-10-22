
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-mapdemo',
  templateUrl: './mapdemo.component.html',
  styleUrls: ['./mapdemo.component.scss'],
})
export class MapdemoComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  @Input() myLatLong = {
      lat: 0 , lng: 0
    };
    @Input() Key: string;

  constructor(private modalCt: ModalController, ) { }

  ngOnInit() {}

  closeModal()
  {
      this.modalCt.dismiss(this.myLatLong, 'Success');
  }

ngAfterViewInit(){
  console.log(this.myLatLong);
  this.getGoogleMapsModule().then(googleMaps => {
    const mapEl = this.mapElementRef.nativeElement;
    const map = new googleMaps.Map(mapEl , {
      center: this.myLatLong,
      zoom: 12
    });
    const marker = new googleMaps.Marker({
          position: this.myLatLong,
          map,
          title: 'Hello World!',
          draggable: true
        });
    marker.addListener('drag', (event) => {
                this.myLatLong.lat =  event.latLng.lat();
                this.myLatLong.lng = event.latLng.lng();
                  });
  }).catch(err => {
    console.log(err);
  });
}

  getGoogleMapsModule()
  {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps)
    {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.Key;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps)
        {
          resolve(loadedGoogleModule.maps);
        }
        else
        {
          reject('Google maps SDK not available.');
        }
      };
    });
  }
}
