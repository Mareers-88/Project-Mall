import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private afs: AngularFirestore) { }
  adminlogin(username: any, password: any) {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_adminlogin', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_adminloginId" });
  }
  Shoplogin(licenceno: any, password: any) {
    console.log(licenceno);
    console.log(password);
    return this.afs.collection('collection_shop', (ref) => ref.where("licenceno", "==", licenceno).where("password", "==", password))
      .valueChanges({ idField: "collection_shopId" });
  }

  Customerlogin(username: any, password: any) {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_customer', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_customerId" });
  }






  //customer

  Addcustomer(CustomerData: any) {
    const CustomerDatas = JSON.parse(JSON.stringify(CustomerData));
    return this.afs.collection("collection_customer").add(CustomerDatas);
  }

  Customerdetail() {
    const Customerdetails = this.afs.collection("collection_customer").valueChanges({ idField: "collection_customerId" });
    console.log(Customerdetails);
    return Customerdetails;

  }
  //profile

  getprofile() {
    const profile = this.afs.doc<any>('collection_customer/' + localStorage.getItem("customerId",))
      .valueChanges({ idField: "collection_customerId" });
    return profile;
  }

  editprofile(customerId: any, customername: any) {
    return this.afs.doc("collection_customer/" + customerId).update(customername);
  }
  getprofilebyid(customername: any) {
    const requestData = this.afs.doc<any>("collection_customer/" + customername).valueChanges();
    return requestData;
  }

  //shop 
  AddShop(ShopData: any) {
    const ShopDatas = JSON.parse(JSON.stringify(ShopData));
    return this.afs.collection("collection_shop").add(ShopDatas);
  }
  ShopView() {
    const ShopViews = this.afs.collection("collection_shop").valueChanges({ idField: "collection_shopId" });
    console.log(ShopViews);
    return ShopViews;

  }

  getshopbyid(shopname: any) {
    const requestData = this.afs.doc<any>("collection_shop/" + shopname).valueChanges();
    return requestData;
  }
  editshop(shopId: any, shopname: any) {
    return this.afs.doc("collection_shop/" + shopId).update(shopname);
  }

  deleteshop(documentID: string) {
    console.log(documentID);
    return this.afs.doc("collection_shop/" + documentID).delete();
  }


  //category

  Addcategory(CategoryData: any) {
    const CategoryDatas = JSON.parse(JSON.stringify(CategoryData));
    return this.afs.collection("collection_category").add(CategoryDatas);
  }
  Categoryview() {
    const Categoryviews = this.afs.collection("collection_category").valueChanges({ idField: "collection_categoryId" });
    console.log(Categoryviews);
    return Categoryviews;
  }

  getcategorybyid(categoryname: any) {
    const requestData = this.afs.doc<any>("collection_category/" + categoryname).valueChanges();
    return requestData;
  }
  editcategory(categoryId: any, categoryname: any) {
    return this.afs.doc("collection_category/" + categoryId).update(categoryname);
  }

  deletecategory(documentID: string) {
    console.log(documentID);
    return this.afs.doc("collection_category/" + documentID).delete();
  }
  //item (getcategory=to get category as dropdown)
  getcategory() {
    const category = this.afs.collection("collection_category").valueChanges({ IdField: "collection_categoryId" });
    return category;
  }
  Itemregservice(ItemData: any) {
    const ItemDatas = JSON.parse(JSON.stringify(ItemData));
    return this.afs.collection("collection_item").add(ItemDatas);
  }
  Itemview() {
    const Itemviews = this.afs.collection("collection_item").valueChanges({ idField: "collection_itemId" });
    console.log(Itemviews);
    return Itemviews;
  }

  getItemReportOfShop(shopName : string, itemName : string){
    const report = this.afs.collection("collection_booking", (ref) => ref
    .where("itemname", "==", itemName)
    .where("shopname", "==", shopName)
    )
    .valueChanges({ idField: "collection_bookingId" });
    return report;
  }

  getitembyid(itemname: any) {
    const requestData = this.afs.doc<any>("collection_item/" + itemname).valueChanges();
    return requestData;
  }
  edititem(itemId: any, itemname: any) {
    return this.afs.doc("collection_item/" + itemId).update(itemname);
  }
  deleteitem(documentID: string) {
    console.log(documentID);
    return this.afs.doc("collection_item/" + documentID).delete();
  }

  //stock
  getitem() {
    const item = this.afs.collection("collection_item").valueChanges({ IdField: "collection_itemId" });
    return item;
  }

  stockregservice(StockData: any, image: any) {
    const stockdata = {
      itemname: StockData.itemname,
      date: StockData.date,
      quantity: StockData.quantity,
      amount: StockData.amount,
      licenceno: StockData.licenceno,
      image: image
    }


    const StockDatas = JSON.parse(JSON.stringify(stockdata));
    return this.afs.collection("collection_stock").add(StockDatas);
  }
  stockview() {
    const stockviews = this.afs.collection("collection_stock", (ref) => ref.where("licenceno", "==", localStorage.getItem("licenceno"))).valueChanges({ idField: "collection_stockId" });
    console.log(stockviews);
    return stockviews;
  }
  updatestock(data: any, stockId: any) {
    return this.afs.doc("collection_stock/" + stockId).set(data);
  }
  stockdeletion() {
    const stockdata = this.afs.collection('collection_stock', (ref) => ref.where("shopname", "==", localStorage.getItem("shopname")))
      .valueChanges({ idField: "collection_stockId" });
    console.log(stockdata);
    return stockdata;
  }
  //cart

  addtocart(Data: any) {
    // this.ok(Data.itemname)
    // console.log(this.ok(Data.itemname));
    const CustomerDatas = JSON.parse(JSON.stringify(Data));
    console.log(Data);
    return this.afs.collection("collection_cart").add(CustomerDatas);
  }
  getcart() {
    const cartdata = this.afs.collection('collection_cart', (ref) => ref.where("customerid", "==", localStorage.getItem("customerId")))
      .valueChanges({ idField: "collection_cartId" });
    console.log(cartdata);

    return cartdata;
  }

  removefromcart(cartId: string) {
    return this.afs.doc("collection_cart/" + cartId).delete();
  }



  // ok(item:any) {
  //   const cartdata = this.afs.collection('collection_cart', (ref) => ref
  //   .where("customerid", "==", localStorage.getItem("customerId"))
  //   .where("itemname","==",item)
  //   )
  //     .valueChanges({ idField: "collection_cartId" });
  //     console.log(cartdata);

  //   return cartdata;
  // }



  Itemviewbylicenseno(licenceno: any) {
    const shopdata = this.afs.collection('collection_stock', (ref) => ref
      .where("licenceno", "==", licenceno))
      .valueChanges({ idField: "collection_stockId" });
    console.log(shopdata);
    return shopdata;

  }
  Itemviewbyname(name: any) {
    const shopdata = this.afs.collection('collection_stock', (ref) => ref
      .where("itemname", "==", name)
      .where("licenceno", "==", localStorage.getItem("licenceno"))
    )
      .valueChanges({ idField: "collection_stockId" });
    // console.log(shopdata);

    return shopdata;

  }

  getimagebyitem(itemname: any) {
    const itemdetails = this.afs.collection('collection_item', (ref) => ref.where("itemname", "==", itemname))
      .valueChanges({ idField: "collection_itemId" });
    return itemdetails;
  }
  //customer viewing items based on shop
  shopdatabylicencenumber(licenceno: any) {
    const shopdata = this.afs.collection('collection_shop', (ref) => ref
      .where("licenceno", "==", licenceno))
      .valueChanges({ idField: "collection_shopId" });
    console.log(shopdata);
    return shopdata;
  }

  //

  deletecart(cartId: string) {
    console.log(cartId);
    return this.afs.doc("collection_cart/" + cartId).delete();
  }

  bookingmaster(Data: any, id: any) {
    const CustomerDatas = JSON.parse(JSON.stringify(Data));
    return this.afs.collection("collection_bookingmaster").doc(id?.toString()).set(CustomerDatas);
  }

  getallbookingmaster() {
    const bm = this.afs.collection("collection_bookingmaster").valueChanges({ idField: "collection_bookingmasterId" });
    return bm;
  }

  booking(Data: any) {
    const CustomerDatas = JSON.parse(JSON.stringify(Data));
    return this.afs.collection("collection_booking").add(CustomerDatas);
  }

  getbm() {
    const data = this.afs.collection('collection_bookingmaster', (ref) => ref.where("customerId", "==", localStorage.getItem("customerId")))
      .valueChanges({ idField: "collection_bookingmasterId" });
    return data;
  }
  getbm1() {
    const data = this.afs.collection('collection_bookingmaster')
      .valueChanges({ idField: "collection_bookingmasterId" });
    return data;
  }


  getbookingbybm(data: any) {
    const details = this.afs.collection('collection_booking', (ref) => ref.where("bookingmasterid", "==", data))
      .valueChanges({ idField: "collection_bookingId" });
    return details;
  }
  stockupdateservice(stockupdatearray: any, stockid: any) {
    return this.afs.doc("collection_stock/" + stockid).update(stockupdatearray);
  }



  // Allrequestlistview() { 

  //   return new Promise<any[]>((resolve, reject) => {
  //     const Sender = this.afs
  //     .collection<any>("collection_bookingmaster")
  //     .valueChanges({idField:"collection_bookingmasterId"})
  //     .subscribe(prodRes => {
  //       this.getmasterdetails().subscribe((res :any[])=>{
  //         prodRes.forEach(el1 => {
  //           el1.Name = res.find((el :{id:any;})=> el.id === el1.bookingmasterid)?.customerid
  //         })
  //         resolve(prodRes)
  //       })
  //     })
  //   })
  // 
  // getmasterdetails()
  // { 
  //     return this.afs.collection<any>("collection_booking", (ref) => ref.where("shopname", "==", localStorage.getItem("shopname"))).snapshotChanges().pipe(map((item: any) => {
  //         const catData: any[] = [] 
  //         if (item) {
  //           // console.log(item)
  //           item.forEach((el: any) => {
  //             catData.push({
  //               id: el.payload.doc.id,
  //               ...el.payload.doc.data()
  //             })

  //           })
  //         }
  //         return catData;
  //       })) 
  // }
  // getbookdetailsbyid(masterid:any)
  // {
  //   console.log(masterid)
  //   return this.afs.doc<any>("collection_bookingmaster/"+ masterid).valueChanges();
  // }




  //validation report
  customervalidation(username: any) {
    return this.afs.collection('collection_customer', (ref) => ref.where("username", "==", username))
      .valueChanges({ idField: "collection_customerId" });
  }

  itemvalidation(itemname: any) {
    return this.afs.collection('collection_item', (ref) => ref.where("itemname", "==", itemname))
      .valueChanges({ idField: "collection_itemId" });
  }


  ///admin side shop details 

  getshopdrop() {
    const sd = this.afs.collection("collection_shop").valueChanges({ idField: "collection_shopId" });
    return sd;
  }
  customerreport(customername: any) {
    const Customerdetails = this.afs.collection('collection_customer', (ref) => ref.where("customername", "==", customername))
      .valueChanges({ idField: "collection_customerId" });
    return Customerdetails;
  }

}