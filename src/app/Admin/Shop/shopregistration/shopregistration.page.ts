import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopregistration',
  templateUrl: './shopregistration.page.html',
  styleUrls: ['./shopregistration.page.scss'],
})
export class ShopregistrationPage implements OnInit {
  image:any;
  image2:any;
  constructor(private fb:FormBuilder,private ss:ServiceService,  private storage: AngularFireStorage ,public route:ActivatedRoute,private Router:Router,public toastCtrl:ToastController) { }
public shopregistartionform=this.fb.group({shopname:[''],ownername:[''],email:[''],licenceno:[''],password:[''],image:[''],image2:[''],place:[''],contactno:['']
})



// showToastWithCloseButton() {
//   const toast = this.toastCtrl.create({
//     message: 'Your files were successfully saved',
//     showCloseButton: true,
//     closeButtonText: 'Ok'
//   });
//   await toast.present();
// }


async presentToast() {
  
  const toast = await this.toastCtrl.create({
    message: 'Your files were successfully saved',

    // duration: 3000,
    // cssClass: 'custom-toast',
    buttons: [
      {
        text: 'ok',
        role: 'cancel'
      }
    ],
  });

  await toast.present();
}

  ngOnInit() {
  }
 



  async OnSubmit(){
    if(this.shopregistartionform.value.shopname ==""||
    this.shopregistartionform.value.contactno ==""||
    this.shopregistartionform.value.email ==""||
    this.shopregistartionform.value.image ==""||
    this.shopregistartionform.value.image2 ==""||
    this.shopregistartionform.value.licenceno ==""||
    this.shopregistartionform.value.ownername ==""||
    this.shopregistartionform.value.password ==""||
    this.shopregistartionform.value.place ==""){
      alert("Please Fill all the fields")
      
  }
  else{
    console.log(this.shopregistartionform.value);
    this.ss.AddShop(this.shopregistartionform.value)
    .then(()=>{
      alert("Registration Completed");
      this.Router.navigate(['/Shop/shopview']);
    });
  }
  }

 


  upload(file :any) {
    
    const path = `Shop/${Date.now()}_${file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    const task = this.storage.upload(path, file);
    // Progress monitoring
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        const url = await res.ref.getDownloadURL();
        resolve(url);
      })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_);
        });
    });
  }
  async handlefile(event: any) {
    const files = event?.target?.files;
    if (files?.length) {
      this.image = await this.upload(files[0]),

      console.log(this.image);
      this.shopregistartionform.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }
  async handlefile2(event: any) {
    const files = event?.target?.files;
    if (files?.length) {
      this.image2 = await this.upload(files[0]);
      console.log(this.image2);
      this.shopregistartionform.controls.image2.setValue(this.image2);
      alert("File Uploaded");
  
    }
  }
}
