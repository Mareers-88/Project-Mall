import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  menuType: string = 'overlay';
  handleRefresh(event: any){
    setTimeout(()=> {
      event.target.complete();
    },2000);
  
  };
  shopdata:any[]=[];
  term:any;
  constructor(private ss:ServiceService) {
  
   }



  ngOnInit() {
    this.ss.ShopView().subscribe(res=>{console.log(res);
      this.shopdata=res;
      // localStorage.setItem('shopname',this.shopdata[0].shopname);

      })
  }

}
