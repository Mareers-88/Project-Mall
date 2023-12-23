import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.page.html',
  styleUrls: ['./customerdetails.page.scss'],
})
export class CustomerdetailsPage implements OnInit {
  public profile: any[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    this.ss.getprofile().subscribe(res => {
      console.log(res);
      this.profile[0]= res;
    });
  }

  ngOnInit() {
    
  }

}
