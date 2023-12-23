import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerreportviewmore',
  templateUrl: './customerreportviewmore.page.html',
  styleUrls: ['./customerreportviewmore.page.scss'],
})
export class CustomerreportviewmorePage  {
public details:any;
public bm:any;

  constructor(private route: ActivatedRoute,private ss:ServiceService) {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.bm = params.get('id');
      console.log(this.bm);
    });
   }
  
  
ionViewDidEnter() {
    this.ss.Customerdetail().subscribe(res => {
      console.log(res);
      this.details = res;
    });
  }
}
