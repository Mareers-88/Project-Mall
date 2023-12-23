import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs/internal/operators/take';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  customerdata: any[] = [];
  customerloginform = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  })
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private ss: ServiceService, private loadingCtrl: LoadingController) { 
    // this.customerloginform=this.fb.group({
    //   username:['',Validators.required],
    //  password:['',Validators.required],
    // });
  }




  private loading: any;

  submit() {

    if (this.customerloginform.value.username == "" || this.customerloginform.value.password == "" ) {
      alert("please fill in all fields");
    }
else{





    console.log(this.customerloginform.value);
    this.ss.Customerlogin(this.customerloginform.value.username, this.customerloginform.value.password)
      .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.customerdata = res;





        if (this.customerdata.length > 0) {
          // alert("login successfull");
          localStorage.setItem('username', this.customerdata[0].username);
          localStorage.setItem('customerId', res[0].collection_customerId);

          this.loadingCtrl.create({
            message: 'authenticating....'
          }).then((overlay) => {
            this.loading = overlay;
            this.loading.present()
          });
          setTimeout(() => {
            this.loading.dismiss();

          }, 500);
          // this.router.navigate(['/Customer/customerview']);
          this.router.navigate(['/Customer/index']);

        }
        else {

          alert("login failed");
          this.router.navigate(['/Guest/signin']);
        }

      });
  }
}
}
