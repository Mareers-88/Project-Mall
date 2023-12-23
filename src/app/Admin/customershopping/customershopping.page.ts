import { combineLatestWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customershopping',
  templateUrl: './customershopping.page.html',
  styleUrls: ['./customershopping.page.scss'],
})
export class CustomershoppingPage {
  public data : User[] = [];
  constructor(private ss:ServiceService) { }

  ionViewDidEnter() {
    const history$ = this.ss.getbm1();
    const users$ = this.ss.Customerdetail();
    // this.ss.getbm1().subscribe(res => {
    //   console.log(res);
    //   this.bm = res;
    // });

    users$.pipe(
      combineLatestWith(history$)
    )
    .subscribe(([user , history ]) => {
      history.forEach((eachHis:any) => {
        const cId = eachHis.customerId;
        const cIndex = user.findIndex(u => u.collection_customerId=== cId);
        if(cIndex <= -1)
          return;

        const userOfOrder: any = user[cIndex];
        const customerName = userOfOrder.customername;

        let eachData = this.findOrCreate(customerName);
        eachData.history.push({date: eachHis.date, amount: eachHis.totalamount, address: eachHis.deliveryaddress})
      
      })
      console.log(this.data)
    });
  }

  private findOrCreate(name : string) : User {
    const index = this.data.findIndex(s => s.customer === name);
    if(index <= -1)
    {
      const user : User = {
        customer: name,
        history: []
      }

      this.data.push(user);
      return user;
    }else{
      return this.data[index]
    }

  }

}
interface User {
  customer: string;
  history : History[];
}

interface History {
  date: string;
  amount: number;
  address : string;
}