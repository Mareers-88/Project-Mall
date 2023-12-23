import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-customeritemviewmore',
  templateUrl: './customeritemviewmore.page.html',
  styleUrls: ['./customeritemviewmore.page.scss'],
})
export class CustomeritemviewmorePage {
  itemId: any;
  amountT: any;
  shopdata: any[] = [];
  shop: any[] = [];
  currentdate: any;
  dateformat: any;
  cartreg: any[] = [];
  itemname: any;
  quan: number = 0;
  shopname: any;

  status: boolean = false;

  constructor(private ss: ServiceService, private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private toastctrl: ToastController, private fb: FormBuilder) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.itemname = params.get('Id');
      this.itemId = params.get('Id');
    });
  }

  ionViewDidEnter() {
    this.currentdate = new Date();
    this.dateformat = this.datepipe.transform(this.currentdate, 'dd-MM-yyyy');
    console.log(this.itemname);
    this.ss.Itemviewbyname(this.itemname).subscribe(res => {
      console.log(res);

      this.shopdata = res;
    });
  }

  cart(data: any) {
    var added = false
    this.ss.shopdatabylicencenumber(this.shopdata[0].licenceno).subscribe(res => {
      if (added) return;
      this.shop[0] = res[0];

      this.cartreg[0] = {
        customerid: localStorage.getItem("customerId"),

        shopname: this.shop[0].shopname,
        amountT: this.quan * parseInt(data.amount),
        quantity: this.quan,
        date: this.dateformat,
        image: data.image,
        itemname: data.itemname,
        itemid: this.itemId
      };
      added=true;
      this.ss.addtocart(this.cartreg['0']).then(() => {

        this.status = true;
        setTimeout(() => {
          this.router.navigate(['/Customer/cart']);

        }, 2000);

      });
    });

  }
  public quantityform = this.fb.group({ quantity: [0, [Validators.min(1)]] })

  // quantity() {
  //   if(this.quantityform.value.quantity?>this.shopdata[0].quantity)
  //   this.quan = this.quantityform.value.quantity;
  // }

  quantity() {
    var quantity = this.quantityform.value.quantity;

    if (!quantity)
      return;

    // const quantity = Number.parseInt(temp);
    // if (!quantity)
    //   return;

    if (quantity > this.shopdata[0].quantity) {
      this.quantityform.patchValue({ quantity: 0 });
      alert("out of stock")
      return
    }

    this.quan = quantity;
  }

  // if(this.itemdetails.length>0)
  // const stockdata = {
  // itemname:this.stockform.value.itemname,
  // date:this.formateddate,
  // quantity:parseInt(data[0].quan) -parseInt(this.quantityform.value.quantity),
  // amount:this.stockform.value.amount,
  // licenceno:localStorage.getItem("licenceno"),
  // image:this.itemde[0].image
  // }


  // this.ss.updatestock(stockdata,data[0].collection_stockId)
  // .then(()=>{
  //   alert("Stock updated")
  //   this.router.navigate(['/Shop/stockview']);
  // });

}
