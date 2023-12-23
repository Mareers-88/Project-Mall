import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoryreg',
  templateUrl: './categoryreg.page.html',
  styleUrls: ['./categoryreg.page.scss'],
})
export class CategoryregPage implements OnInit {

  constructor(private fb:FormBuilder,private ss:ServiceService,private alertController: AlertController,private route:ActivatedRoute,private router:Router) { }
public categoryregistrationform=this.fb.group({categoryname:[''],description:['']})

  ngOnInit() {
  }


 async OnSubmit(){
    if(this.categoryregistrationform.value.categoryname ==""||
    this.categoryregistrationform.value.description =="") {

      const alert = await this.alertController.create({
        header: 'Alert',
        // subHeader: 'Important message',
        message: 'Please Fill all the fields',
        buttons: ['OK'],
        
      });
      

      await alert.present();

  }
  else{
    console.log(this.categoryregistrationform.value);
    this.ss.Addcategory(this.categoryregistrationform.value)
    .then(()=>{
      alert("Registration Completed");
      this.router.navigate(['/Admin/categoryview']);
    });
  }
  }
  }
