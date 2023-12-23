import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute ,ParamMap} from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-itemedit',
  templateUrl: './itemedit.page.html',
  styleUrls: ['./itemedit.page.scss'],
})
export class ItemeditPage implements OnInit {
  itemId: any;
  image:any;
  itemdata :any[]=[];


  constructor(private fb:FormBuilder,private ss:ServiceService,private route:ActivatedRoute,private storage:AngularFireStorage) { 
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.itemId=param.get('Id');
    });
  }
  public itemeditform=this.fb.group({categoryname:[''],itemname:[''],description:[''],image:['']});

  ngOnInit() {
  
    console.log(this.itemId);
    this.ss.getitembyid(this.itemId).subscribe(res =>
      {
    console.log(res);

        if(res)
        {
          this.itemeditform.patchValue(res);
          this.itemdata[0]=res;
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
      this.itemeditform.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }


  update()
  {
    if(this.itemeditform.value.categoryname ==""||
    this.itemeditform.value.image ==""|| 
    this.itemeditform.value.itemname ==""||
    this.itemeditform.value.description =="") {
      alert("Please Fill all the fields")
  }

  else{
  this.ss.edititem(this.itemId,this.itemeditform.value).then(()=>
  {
    alert("Details Updated");
  
  });
}
  }

}
