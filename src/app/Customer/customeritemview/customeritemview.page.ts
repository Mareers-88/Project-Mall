import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customeritemview',
  templateUrl: './customeritemview.page.html',
  styleUrls: ['./customeritemview.page.scss'],
})
export class CustomeritemviewPage implements OnInit {
  filtered : any[]=[];
  shopdata:any[]=[];
  licenceno: any;

  constructor(private ss:ServiceService ,private route:ActivatedRoute,private storage:AngularFireStorage) {   

    this.route.paramMap.subscribe((param:ParamMap)=>{
    this.licenceno=param.get('Id');

  }); }

  ngOnInit() {
   
    this.ss.Itemviewbylicenseno(this.licenceno).subscribe(res=>{console.log(res);
      this.shopdata=res;
      this.filtered = res;
      localStorage.setItem('licenceno',this.licenceno);

      }) 
 
  }

  filter(event:any){
    const mod=event.detail.value;

    if(mod === 1){
      this.filtered = this.shopdata;
    }else{
      this.filtered = this.shopdata;
      this.filtered = this.shopdata.filter(s => s.quantity > 0);

    }

  }

}
