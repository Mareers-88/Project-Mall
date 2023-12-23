import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cartdata: any[] = [];
  amountT: any;
  totalamount: any;
  public previousPage: string | null;
  i: any;
  constructor(private ss: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    var previousNavigation = this.router.getCurrentNavigation()?.previousNavigation;
    console.log(previousNavigation)
    if (previousNavigation != null && previousNavigation.finalUrl != null) {
      this.previousPage = previousNavigation.finalUrl.toString();
    } else {
      this.previousPage = null;
    }

    this.ss.getcart().subscribe(res => {
      console.log(res);
      this.cartdata = res;
      // console.log(this.cartdata[0].amountT)

      this.totalamount = 0;

      for (this.i = 0; this.i < this.cartdata.length; this.i++) {
        this.totalamount = this.totalamount + parseInt(this.cartdata[this.i].amountT);

      }

      console.log(this.totalamount)
    })
  }
  delete(cartId: string) {
    this.ss.deletecart(cartId).then(
      (error: any) => console.error(error)
    );
  }


  navigate() {
    if (this.cartdata.length <= 0)
      return;

    const temp = this.cartdata[0];
    const to = temp.collection_cartId;
    this.router.navigate([`/Customer/payment/${to}`])
  }

  sentToPrevious() 
  {
    if (this.previousPage)
      this.router.navigate([this.previousPage])
    else
      this.router.navigate(['/Customer/index'])
  }

  deleteitemfromcart(Data: string) {
    this.ss.removefromcart(Data);

  }

}
