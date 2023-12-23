import { Component , OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.page.html',
  styleUrls: ['./itemview.page.scss'],
})

export class ItemviewPage implements OnInit {

  
handleRefresh(event: any){
  setTimeout(()=> {
    event.target.complete();
  },2000);

};
itemdata :any[]=[];
term:any;

  constructor(private ss:ServiceService) { }

  ngOnInit(){
    this.ss.Itemview().subscribe(res=>{console.log(res);
      this.itemdata=res;
      })
  }
  delete(Id: string)
  {
    if(confirm("you want to delete")){
      this.ss.deleteitem(Id).then(
        (error: any) =>console.error(error)
      );
    }
    }
}
