import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.page.html',
  styleUrls: ['./categoryedit.page.scss'],
})
export class CategoryeditPage implements OnInit {
  categoryId: any;

  constructor(private fb:FormBuilder,private ss:ServiceService,private route:ActivatedRoute) { 
  this.route.paramMap.subscribe((param:ParamMap)=>{
    this.categoryId=param.get('Id');
  });
  }
  public categoryeditform=this.fb.group({categoryname:[''],description:['']});

  ngOnInit() {
    console.log(this.categoryId);
      this.ss.getcategorybyid(this.categoryId).subscribe(res =>
        {
      console.log(res);

          if(res)
          {
            this.categoryeditform.patchValue(res);
          }
        });
  }

  update()
  {
  this.ss.editcategory(this.categoryId,this.categoryeditform.value).then(()=>
  {
    alert("Details Updated");
  
  });
  }
}