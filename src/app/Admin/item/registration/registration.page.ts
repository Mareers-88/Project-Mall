import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  image:any;
  item: any[] = [];
  constructor(private ss:ServiceService,private fb:FormBuilder,private storage: AngularFireStorage,private router:Router) { }
 public itemregistrationform=this.fb.group({
    categoryname:[''],itemname:[''],description:[''],image:['']
    
  })



  
  category:any[]=[];
  ngOnInit() {
    this.ss.getcategory().subscribe((data: any) => {
      this.category=data;
      console.log(data);
    });
  }
  Itemreg(){

    
    if(this.itemregistrationform.value.categoryname ==""||
    this.itemregistrationform.value.image ==""|| 
    this.itemregistrationform.value.itemname ==""||
    this.itemregistrationform.value.description =="") {
      alert("Please Fill all the fields")
  }

  else {
    this.ss.itemvalidation(this.itemregistrationform.value.itemname)
      .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.item = res;
        if (this.item.length > 0) {
          alert("Item Already Exist!!!");
        }
  else{
    console.log(this.itemregistrationform.value);
    this.ss.Itemregservice(this.itemregistrationform.value).then(()=>{
      alert("Item Registarted ")
      this.router.navigate(['/Admin/item/itemview'])
    })
  }

      })
    }
    
  }



  upload(file :any) {
    
    const path = `item/${Date.now()}_${file.name}`;
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
      this.image = await this.upload(files[0]);
      console.log(this.image);
      this.itemregistrationform.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }
  
}
