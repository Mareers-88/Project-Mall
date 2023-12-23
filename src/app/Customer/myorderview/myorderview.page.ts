import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myorderview',
  templateUrl: './myorderview.page.html',
  styleUrls: ['./myorderview.page.scss'],
})
export class MyorderviewPage  {
  public bm: any;
  public booking: any;
  constructor(private route: ActivatedRoute,private ss:ServiceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bm = params.get('id');
      console.log(this.bm);
    });
  }

  ionViewDidEnter() {
    this.ss.getbookingbybm(this.bm).subscribe(res => {
      console.log(res);
      this.booking = res;
    });
  }

}
