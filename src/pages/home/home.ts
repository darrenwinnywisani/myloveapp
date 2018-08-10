import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name1='';
name2='';

constructor(private alertCtrl: AlertController) {

}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'love',
    subTitle:'%',
    buttons: ['Dismiss']
  });
  alert.present();
}
get score(){
const letters = (this.name1 + this.name2);
let sum =0;
for (let i=0; i<letters.length; i++){sum +=letters.charCodeAt(i);
}
return sum % 101;
}
}
