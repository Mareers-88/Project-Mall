import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  itemdetails: any;
  itemde: any;
  length: any
  constructor(private ss: ServiceService, private fb: FormBuilder, private DatePipe: DatePipe, private storage: AngularFireStorage, private route: ActivatedRoute, private router: Router) { }
  // public stockform=this.fb.group({
  // itemname:[''],date:[''],quantity:[''],amount:[''],licencenumber:localStorage.getItem('licenseno')
  // })

  cdate: any;

  formateddate: any;
  stockdata: any;
  stockform!: FormGroup;



  item: any[] = [];
  ngOnInit() {
    this.cdate = new Date;
    this.formateddate = this.DatePipe.transform(this.cdate, 'yyyy-MM-dd');
    this.stockform = this.fb.group({
      itemname: [''], date: this.formateddate, quantity: [''], amount: [''], licenceno: localStorage.getItem('licenceno')
    })

    this.ss.getitem().subscribe((data: any) => {
      this.item = data;
      // console.log(data);
    })

  }


  stockupdate() {
    this.ss.getimagebyitem(this.stockform.value.itemname).subscribe((data: any) => {
      this.itemde = data;
    });
    let update = false;
    let i = 0
    this.ss.Itemviewbyname(this.stockform.value.itemname).subscribe((data: any) => {
      console.log(i);
      i++
      if (update) return;

      this.itemdetails = data;

      if (this.itemdetails.length > 0) {
        const stockdata = {
          itemname: this.stockform.value.itemname,
          date: this.formateddate,
          quantity: parseInt(data[0].quantity) + parseInt(this.stockform.value.quantity),
          amount: this.stockform.value.amount,
          licenceno: localStorage.getItem("licenceno"),
          image: this.itemde[0].image,
          // initialquantity: parseInt(data[0].quantity) + parseInt(this.stockform.value.quantity)
        }

        console.log(5);
        this.ss.updatestock(stockdata, data[0].collection_stockId)
          .then(() => {
            alert("Stock updated")
            this.router.navigate(['/Shop/stockview']);
          });


      }
      else {

        console.log("helloo");
        this.ss.stockregservice(this.stockform.value, this.itemde[0].image)
          .then(() => {
            // alert("Stock Added")
            this.router.navigate(['/Shop/stockview']);

          });
      }
      update = true;
    });

  }

  view() {
    this.ss.getimagebyitem(this.stockform.value.itemname).subscribe((data: any) => {
      this.itemdetails = data;
      // console.log(data);
    });
  }


}
