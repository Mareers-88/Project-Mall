import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.page.html',
  styleUrls: ['./categoryview.page.scss'],
})
export class CategoryviewPage implements OnInit {
  categorydata: any[]=[];

  constructor(private ss:ServiceService,private alertController: AlertController) { }

  ngOnInit() {
    this.ss.Categoryview().subscribe(res=>{console.log(res);
      this.categorydata=res;
  })
  }

  


 delete(Id: string)
  {
   
    if(confirm("you want to delete")){
      this.ss.deletecategory(Id).then(
        (error: any) =>console.error(error)
      );
    }
    }
}
