import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage  {


  public bm: any[] = [];
  constructor(private ss: ServiceService) { }

  ionViewDidEnter() {
    this.ss.getbm().subscribe(res => {
      console.log(res);
      this.bm = res;
    });
  }

}
