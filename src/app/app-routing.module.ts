import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Guest/index',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'Guest/index',
    loadChildren: () => import('./Guest/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Guest/signup',
    loadChildren: () => import('./Guest/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'Guest/signin',
    loadChildren: () => import('./Guest/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'Guest/adminlogin',
    loadChildren: () => import('./Guest/adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'Guest/shoplogin',
    loadChildren: () => import('./Guest/shoplogin/shoplogin.module').then( m => m.ShoploginPageModule)
  },
  {
    path: 'Admin/index',
    loadChildren: () => import('./Admin/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Admin/category/categoryreg',
    loadChildren: () => import('./Admin/category/categoryreg/categoryreg.module').then( m => m.CategoryregPageModule)
  },
  {
    path: 'Admin/category/categoryview',
    loadChildren: () => import('./Admin/category/categoryview/categoryview.module').then( m => m.CategoryviewPageModule)
  },
  {
    path: 'Admin/category/categoryedit/:Id',
    loadChildren: () => import('./Admin/category/categoryedit/categoryedit.module').then( m => m.CategoryeditPageModule)
  },
  {
    path: 'Shop/stock',
    loadChildren: () => import('./Shop/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'Admin/item/registration',
    loadChildren: () => import('./Admin/item/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'Admin/item/itemview',
    loadChildren: () => import('./Admin/item/itemview/itemview.module').then( m => m.ItemviewPageModule)
  },
  {
    path: 'Admin/item/itemdelete',
    loadChildren: () => import('./Admin/item/itemdelete/itemdelete.module').then( m => m.ItemdeletePageModule)
  },
  {
    path: 'Admin/item/itemedit/:Id',
    loadChildren: () => import('./Admin/item/itemedit/itemedit.module').then( m => m.ItemeditPageModule)
  },
  {
    path: 'Admin/shopregistration',
    loadChildren: () => import('./Admin/Shop/shopregistration/shopregistration.module').then( m => m.ShopregistrationPageModule)
  },
  {
    path: 'Admin/shopview',
    loadChildren: () => import('./Admin/Shop/shopview/shopview.module').then( m => m.ShopviewPageModule)
  },
  {
    path: 'Admin/shopedit/:Id',
    loadChildren: () => import('./Admin/Shop/shopedit/shopedit.module').then( m => m.ShopeditPageModule)
  },
  {
    path: 'Shop/addstock',
    loadChildren: () => import('./Shop/addstock/addstock.module').then( m => m.AddstockPageModule)
  },
  {
    path: 'Shop/stockview',
    loadChildren: () => import('./Shop/stockview/stockview.module').then( m => m.StockviewPageModule)
  },
  {
    path: 'Customer/customerview',
    loadChildren: () => import('./Customer/customerview/customerview.module').then( m => m.CustomerviewPageModule)
  },
  {
    path: 'Customer/customerdetails',
    loadChildren: () => import('./Customer/customerdetails/customerdetails.module').then( m => m.CustomerdetailsPageModule)
  },
  {
    path: 'Customer/customerdetailsedit/:Id',
    loadChildren: () => import('./Customer/customerdetailsedit/customerdetailsedit.module').then( m => m.CustomerdetailseditPageModule)
  },
  {
    path: 'Customer/customeritemview/:Id',
    loadChildren: () => import('./Customer/customeritemview/customeritemview.module').then( m => m.CustomeritemviewPageModule)
  },
  {
    path: 'Customer/customeritemviewmore/:Id',
    loadChildren: () => import('./Customer/customeritemviewmore/customeritemviewmore.module').then( m => m.CustomeritemviewmorePageModule)
  },
  {
    path: 'Customer/index',
    loadChildren: () => import('./Customer/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Customer/cart',
    loadChildren: () => import('./Customer/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'Customer/payment/:id',
    loadChildren: () => import('./Customer/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'Customer/myorder',
    loadChildren: () => import('./Customer/myorder/myorder.module').then( m => m.MyorderPageModule)
  },
  {
    path: 'Customer/myorderview/:id',
    loadChildren: () => import('./Customer/myorderview/myorderview.module').then( m => m.MyorderviewPageModule)
  },
  {
    path: 'Shop/request',
    loadChildren: () => import('./Shop/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'Admin/sales',
    loadChildren: () => import('./Admin/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'Admin/customerreport',
    loadChildren: () => import('./Admin/customerreport/customerreport.module').then( m => m.CustomerreportPageModule)
  },
  {
    path: 'Admin/customerreportviewmore/:id',
    loadChildren: () => import('./Admin/customerreportviewmore/customerreportviewmore.module').then( m => m.CustomerreportviewmorePageModule)
  },
  {
    path: 'Admin/report',
    loadChildren: () => import('./Admin/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'Admin/customershopping',
    loadChildren: () => import('./Admin/customershopping/customershopping.module').then( m => m.CustomershoppingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
