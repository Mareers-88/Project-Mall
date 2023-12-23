import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  constructor(private ss: ServiceService, private fb: FormBuilder) { }
  shopdata:any[]=[];
  itemdata:any[]=[];

  shopName : string;
  categoryName : string;
  itemName : string;

  totalAmount = 0;
  totalQuantity = 0;

   data:any[] = []

shop:any;
  ngOnInit() {
    this.ss.ShopView().subscribe(res=>{
      console.log(res);
      this.shopdata=res;
      })
  }
  shopadmin() {
    console.log(this.shopName)
    this.ss.Itemview().subscribe(res=>{
      console.log(res);
      this.itemdata=res;
    })
    
  }

  itemChange(){
    if(!this.shopName || !this.itemChange)
      return;

    this.ss.getItemReportOfShop(this.shopName, this.itemName).subscribe({
      next: (val) => {
        this.data = val;
        this.updateChanges();
      },
      error: (err) => {

      },
      complete: () => {

      }
    })
  }

  updateChanges(){
    if(!this.data)
    {
      this.totalAmount = 0;
      this.totalQuantity = 0;
      return;
    }

    this.data.forEach(each => {
      this.totalQuantity += each.quantity;
      this.totalAmount += each.amount;
      
    })
  }

}
