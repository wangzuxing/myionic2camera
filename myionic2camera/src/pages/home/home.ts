import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    image : string;
    camera: Camera;

    constructor(public navCtrl: NavController, camera: Camera) {
        this.image = null;
        this.camera = camera;
    }
    
    takepic() {
        var options = {
            destinationType: 0,
            sourceType: 1,
            encodingType: 0,
            quality:100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };
        
        this.camera.getPicture(options).then((data) => {
            var imgdata = "data:image/jpeg;base64," + data;
            this.image = imgdata;
        }, (error) => {
            alert(error);
        });
    }

}
