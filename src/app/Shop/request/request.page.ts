import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit { 
  masterdetailsarray:any; 
  constructor(private ss:ServiceService) { }

  ngOnInit() {
  //   this.ss.Allrequestlistview().then(res => {
  //     console.log(res);
  //     this.masterdetailsarray = res;
   
  // })
  }
}
