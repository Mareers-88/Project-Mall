import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-stockview',
  templateUrl: './stockview.page.html',
  styleUrls: ['./stockview.page.scss'],
})
export class StockviewPage implements OnInit {
  stockdata:any[]=[];
  constructor(private ss:ServiceService) { }

  ngOnInit() {
  
  this.ss.stockview().subscribe(res=>{console.log(res);
    this.stockdata=res;
    
    })
  }

  GotoNotityPage(){
    
  }
}
