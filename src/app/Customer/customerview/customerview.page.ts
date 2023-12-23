import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.page.html',
  styleUrls: ['./customerview.page.scss'],
})
export class CustomerviewPage implements OnInit {
  shopdata:any[]=[];
  constructor(private ss:ServiceService) { }

  ngOnInit() {
    this.ss.ShopView().subscribe(res=>{console.log(res);
      this.shopdata=res;
    })
  }

}
