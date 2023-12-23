import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public Guest = [
    { title: 'index', url: 'Guest/index', icon: 'book' },
    { title: 'signup', url: 'Guest/signup', icon: 'person-add' },
    { title: 'signin', url: 'Guest/signin', icon: 'person' },
    { title: 'shoplogin', url: 'Guest/shoplogin', icon: 'storefront' },
    { title: 'adminlogin', url: 'Guest/adminlogin', icon: 'key' },
  ];
   public Admin = [
    // { title: 'sales', url: 'Admin/sales', icon: 'newspaper' },

    { title: 'category view', url: 'Admin/category/categoryview', icon: 'folder' },

    { title: 'shopview', url: 'Admin/shopview', icon: 'storefront' },

    { title: 'Item view', url: 'Admin/item/itemview', icon: 'reader' },
    // { title: 'customer report', url: 'Admin/customerreport', icon: 'storefront' },
    { title: 'Reports', url: 'Admin/report', icon: 'reader' },

    { title: 'Logout', url: 'Guest/index', icon: 'log-out' },

  ];
  public Shop = [
    { title: 'stock', url: '/Shop/stockview', icon: 'cloud-upload' },
    { title: 'Request', url: 'Shop/request', icon: 'newspaper' },

    { title: 'Logout', url: 'Guest/index', icon: 'log-out' },

  ];
  public Customer = [
    { title: 'Index', url: '/Customer/index', icon: 'paper-plane' },
    // { title: 'View', url: '/Customer/customeritemview', icon: 'paper-plane' },

    { title: 'Profile', url: '/Customer/customerdetails', icon: 'person' },
    { title: 'cart', url: '/Customer/cart', icon: 'cart' },
    { title: 'My Orders', url: '/Customer/myorder', icon: 'newspaper' },

    { title: 'Logout', url: 'Guest/index', icon: 'log-out' },
  ];
  public sidemenutitle='';
  public menuitems:any;
  public name:any;
  public username:any;


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router:Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
       
        if(this.router.url.includes('Guest/'))
        {
         this.menuitems=this.Guest;
         this.sidemenutitle='Guest Dashboard';

        }
        if(this.router.url.includes('Admin/'))
        {
         this.menuitems=this.Admin;
         this.sidemenutitle='Admin Dashboard';
        }
        if(this.router.url.includes('Shop/'))
        {
         this.menuitems=this.Shop;
         this.sidemenutitle='Shop Dashboard';
         this.name=localStorage.getItem("licenceno");

        }
        if(this.router.url.includes('Customer/'))
        {
         this.menuitems=this.Customer;
         this.sidemenutitle='Customer Dashboard';
         this.username=localStorage.getItem("username");

        }
      }
      
    });
  }
}
