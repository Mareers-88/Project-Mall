import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
  admindata: any[]=[];
  adminloginform=this.fb.group({
    username:[''],
    password:['']
  })

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private ls:ServiceService) { }

  ngOnInit() {
  }
submit()
{
  console.log(this.adminloginform.value);
  this.ls.adminlogin(this.adminloginform.value.username, this.adminloginform.value.password)
  .pipe(take(1))
    .subscribe(res => {
      console.log(res);
      this.admindata = res;
      if (this.admindata.length > 0) {
        alert("login successfull");
        this.router.navigate(['/Admin/index']);
      }
      else {
        alert("login failed");
        this.router.navigate(['/Guest/adminlogin']);
      }

    });
}
}
