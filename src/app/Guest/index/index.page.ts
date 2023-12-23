import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { IonTabs, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {
 @ViewChild(IonTabs) tabs: IonTabs;
 selected='';

  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);

  };

  constructor(private toastCtrl: ToastController, private router: Router, private route: ActivatedRoute, private renderer: Renderer2) { 
    
  }

  setSelectedTab(){
    const selectedRaw = this.tabs.getSelected();

    if(selectedRaw === undefined)
      return;
     
    this.selected=selectedRaw;
  }
 
  private loading: any;
  offers = {
 SlidesPerView:3.5,
 slidesOffsetbefore:11,
 spaceBetween:10,
 loop:true

  };

  //install toast controller
  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      // header: 'Toast header',
      message: '<ion-icon name="alert-circle-outline"></ion-icon> sign in to continue',
      position: 'bottom',
      color: "warning",
      buttons: [
        {

          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'signin',
          role: 'cancel',

          handler: () => {
            this.router.navigate(['/Guest/signin']);
            console.log('sign in');

          }
        }
      ]
    });

    toast.present();
    setTimeout(() => {
      this.toastCtrl.dismiss();

    }, 2000);
  }

}


