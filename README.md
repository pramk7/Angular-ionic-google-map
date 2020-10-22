# Angular-ionic-google-map
user can use this library module by directly importing in angular module.

just import in module.
import { GoogleMapModule } from './google-map/Google-Map-Module';

use as with selector with your own google map API key

<app-google-map [MapCenter]="latlng" (SelectedLatLng)="getNewLatLong($event)" ApiKey="***************"></app-google-map>

MapCenter is the center co-ordintate of map which user will see.
Selected LatLng is value which has been emited by map component,, user can get it in event.
ApiKey privide your Google API key for accesing may.
