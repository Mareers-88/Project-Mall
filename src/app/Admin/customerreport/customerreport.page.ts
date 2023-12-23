import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerreport',
  templateUrl: './customerreport.page.html',
  styleUrls: ['./customerreport.page.scss'],
})
export class CustomerreportPage implements OnInit {

  constructor(private ss:ServiceService) { }
  Customerdetails :any[]=[];
  ngOnInit() {
    this.ss.Customerdetail().subscribe(res=>{console.log(res);
      this.Customerdetails=res;
      })
  }

}
