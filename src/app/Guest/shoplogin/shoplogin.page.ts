import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-shoplogin',
  templateUrl: './shoplogin.page.html',
  styleUrls: ['./shoplogin.page.scss'],
})
export class ShoploginPage implements OnInit {
  shopdata: any[]=[];
  shoploginform=this.fb.group({
    licenceno:[''],
    password:['']
  })
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private ss:ServiceService) { }

  ngOnInit() {
  }
  submit()
  {
    console.log(this.shoploginform.value);
    this.ss.Shoplogin(this.shoploginform.value.licenceno, this.shoploginform.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.shopdata = res;
        if (this.shopdata.length > 0) {
          alert("login successfully");
          localStorage.setItem('licenceno',this.shopdata[0].licenceno);
          localStorage.setItem('shopname',this.shopdata[0].shopname);

          this.router.navigate(['/Shop/stockview']);
        }
        else {
          alert("login failed");
          this.router.navigate(['/Guest/shoplogin']);
        }
  
      });
  }
}
