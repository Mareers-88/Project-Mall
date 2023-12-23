import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopedit',
  templateUrl: './shopedit.page.html',
  styleUrls: ['./shopedit.page.scss'],
})
export class ShopeditPage implements OnInit {
  shopdata :any[]=[];
  image:any;
  image2:any;
  shopId:any;
  constructor(private fb:FormBuilder,private ss:ServiceService,private route:ActivatedRoute,private storage:AngularFireStorage) { 
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.shopId=param.get('Id');
    });
  }
  public shopeditform=this.fb.group({shopname:[''],ownername:[''],email:[''],licenceno:[''],password:[''],image:[''],image2:[''],place:[''],contactno:['']});

  ngOnInit() {
    console.log(this.shopId);
      this.ss.getshopbyid(this.shopId).subscribe(res =>
        {
      console.log(res);

          if(res)
          {
            this.shopeditform.patchValue(res);
            this.shopdata[0]=res;

          }
        });
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
      this.shopeditform.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }
  async handlefile2(event: any) {
    const files = event?.target?.files;
    if (files?.length) {
      this.image2 = await this.upload(files[0]);
      console.log(this.image2);
      this.shopeditform.controls.image2.setValue(this.image2);
      alert("File Uploaded");
  
    }
  }
  update()
  {
    if(this.shopeditform.value.shopname ==""||
    this.shopeditform.value.contactno ==""||
    this.shopeditform.value.email ==""||
    this.shopeditform.value.image ==""||
    this.shopeditform.value.image2 ==""||
    this.shopeditform.value.licenceno ==""||
    this.shopeditform.value.ownername ==""||
    this.shopeditform.value.password ==""||
    this.shopeditform.value.place ==""){
      alert("Please Fill all the fields")
  }
  else{
  this.ss.editshop(this.shopId,this.shopeditform.value).then(()=>
  {
    alert("Details Updated");
  
  });
}
  }
}