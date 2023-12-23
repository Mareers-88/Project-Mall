import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  customerdata: any[] = [];
  public valid = false;
  public c: any;

  constructor(private fb: FormBuilder, private ss: ServiceService, private router: Router) { }
  public customeregistartionform = this.fb.group({
    customername: [''], email: [''], username: [''], password: [''], Aadhar: [''], place: [''], contactno: ['']
  })
  ngOnInit() {
  }

  OnSubmit() {

    if (this.customeregistartionform.value.customername == "" ||
      this.customeregistartionform.value.email == "" ||
      this.customeregistartionform.value.place == "" ||
      this.customeregistartionform.value.username == "" ||
      this.customeregistartionform.value.password == "" ||
      !this.customeregistartionform.value.Aadhar||
      !this.customeregistartionform.value.contactno  ) {
      alert("please fill in all fields");
    }
    else {

      this.c = this.customeregistartionform.value.contactno.toString();
      console.log(this.c)
      if (this.c.length != 10) {
        alert("Enter valid Phone number");
      }
      else {
        this.c = this.customeregistartionform.value.Aadhar.toString();
        if (this.c.length != 12) {
          alert("Enter valid Aadhar number");
        }

        else {
          this.ss.customervalidation(this.customeregistartionform.value.username)
            .pipe(take(1))
            .subscribe(res => {
              console.log(res);
              this.customerdata = res;
              if (this.customerdata.length > 0) {
                alert("Username Already Exist!!!");
              }
              else {
                console.log(this.customeregistartionform.value);
                this.ss.Addcustomer(this.customeregistartionform.value)
                  .then(() => {
                    alert("Registration Completed")
                    this.router.navigate(['/Guest/signin']);

                  });
              }
            });
        }
      }
    }
  }
}
