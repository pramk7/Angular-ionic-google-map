import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapdemoComponent } from './../google-map/mapdemo/mapdemo.component';
import { GoogleMapComponent } from './../google-map/google-map.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [GoogleMapComponent, MapdemoComponent],
    imports: [ CommonModule,
        FormsModule,
        IonicModule],
    exports: [GoogleMapComponent, MapdemoComponent]
})
export class GoogleMapModule {

}
