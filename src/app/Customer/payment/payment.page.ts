import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {


  public profile: any[] = [];
  public payment: any[] = [];
  public payment1: any[] = [];
  amount: any;
  cartdata: any;
  deliveryaddress: any;
  currentdate: any;
  quantity: any;
  shopname: any;
  dateformat: any;
  item: any;
  bm: any;
  i: any;
  id: any;
  bmid: string[] = [];
  totalamount: any;
  constructor(private ss: ServiceService, private route: ActivatedRoute, private datepipe: DatePipe, private router: Router, private fb: FormBuilder) {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.totalamount = params.get('id');
    //   console.log(this.totalamount);
    // });
    this.totalamount = this.route.snapshot.paramMap.get('id')
    this.ss.getcart().subscribe(res => {
      console.log(res);
      this.cartdata = res;


      this.totalamount = 0;

      for (this.i = 0; this.i < this.cartdata.length; this.i++) {
        this.totalamount = this.totalamount + parseInt(this.cartdata[this.i].amountT);


      }

      console.log(this.cartdata)
    })

  }


  ionViewDidEnter() {
    this.currentdate = new Date();
    this.dateformat = this.datepipe.transform(this.currentdate, 'dd-MM-yyyy');
    this.ss.getprofile().subscribe(res => {
      console.log(res);
      this.profile[0] = res;
    });

    this.ss.getcart().subscribe(res => {
      console.log(res);
      this.item = res;
    });

    this.ss.getallbookingmaster().subscribe(res => {
      console.log(res);
      this.bm = res;
    });
  }
  public customerpaymentform = this.fb.group(
    {
      deliveryaddress: [''],
    });

  address() {
    if(this.customerpaymentform.value.deliveryaddress =="")
     {
      alert("Please Fill all the fields")
  }

  else{
    this.deliveryaddress = this.customerpaymentform.value.deliveryaddress;
  }
  }

  order() {
    
    if (!this.deliveryaddress||this.deliveryaddress.length===0)
    {
      alert("Please Fill all the fields")
  return;
    }
  
    for (this.i = 0; this.i < this.item.length; this.i++) {
      if (this.item[this.i] === null)
        continue

      // collection_stockId
      var quantity = (this.item[this.i].quantity)
      var itemname = (this.item[this.i].itemid);
      var comp = false;

      this.ss.Itemviewbyname(itemname).subscribe(res => {
        if (comp) return
        var itemz = <any>res[0];
        itemz.quantity -= quantity;
        console.log(itemz);
        comp = true;
        var id = itemz.collection_stockId;
        delete itemz.collection_stockId;
        this.ss.updatestock(itemz, id)

     
        // res.quantity=quantity
      })
    }



    this.id = this.bm.length;
    this.id = this.id + 1;
    this.bmid['0'] = String(this.id);

    this.payment = [{
      customerId: localStorage.getItem("customerId"),
      paymentstatus: "paid",
      totalamount: this.totalamount,
      date: this.dateformat,
      deliveryaddress: this.deliveryaddress,
      bookingstatus: 'Booked'
    }];

    console.log(this.payment['0']);
    this.ss.bookingmaster(this.payment['0'], this.bmid['0']).then(() => {
      alert("Your order was placed");
      //   // this.router.navigate(['/Customer/cart']);
    });

    for (this.i = 0; this.i <= this.item.length; this.i++) {
      this.payment1 = [{
        bookingmasterid: this.bmid['0'],
        quantity: this.item[this.i].quantity,
        shopname: this.item[this.i].shopname,
        licenceno: localStorage.getItem("licenceno"),
        amount: this.item[this.i].amountT,
        itemname: this.item[this.i].itemname,
        image: this.item[this.i].image
      }];

      console.log(this.payment1[0]);
      this.ss.booking(this.payment1[0]).then(() => {
      });

      this.ss.deletecart(this.item[this.i].collection_cartId).then(() => {
        this.router.navigate(['/Customer/myorder']);
      });
    }

  }
}


