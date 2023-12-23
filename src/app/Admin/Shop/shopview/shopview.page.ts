import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-shopview',
  templateUrl: './shopview.page.html',
  styleUrls: ['./shopview.page.scss'],
})
export class ShopviewPage implements OnInit {

  shopdata: any[]=[];
  constructor(private ss:ServiceService) { }

  ngOnInit() {
    this.ss.ShopView().subscribe(res=>{console.log(res);
    this.shopdata=res;
    })
  }
  delete(Id: string)
  {
    if(confirm("you want to delete")){
      this.ss.deleteshop(Id).then(
        (error: any) =>console.error(error)
      );
    }
    }
}
