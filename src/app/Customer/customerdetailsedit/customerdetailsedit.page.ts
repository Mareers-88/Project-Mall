import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerdetailsedit',
  templateUrl: './customerdetailsedit.page.html',
  styleUrls: ['./customerdetailsedit.page.scss'],
})
export class CustomerdetailseditPage implements OnInit {
  customerId:any;
  constructor(private ss:ServiceService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router ) { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.customerId = params.get('Id');
    });
  }
  public customerdetailsedit = this.fb.group(
    {
      customername: [''],
      username: [''],
      email: [''],
      password: [''],
      Aadhar: [''],
      place: [''],
      contactno: ['']
    });

  ngOnInit() {
    console.log(this.customerId);
    this.ss.getprofilebyid(this.customerId).subscribe(res => {
      console.log(res);
      if (res) {
        this.customerdetailsedit.patchValue(res);
      }
    
    });
    

  }
  update() {
    
      if(this.customerdetailsedit.value.Aadhar ==""||
      this.customerdetailsedit.value.contactno ==""||
      this.customerdetailsedit.value.email ==""||
      this.customerdetailsedit.value.place ==""||
      this.customerdetailsedit.value.customername ==""||
    
      this.customerdetailsedit.value.password ==""||
      this.customerdetailsedit.value.place ==""){
        alert("Please Fill all the fields")
    }
    else{
    console.log(this.customerdetailsedit.value);
    this.ss.editprofile(this.customerId, this.customerdetailsedit.value).then(() => 
    {
      alert("Updated Successfull");
      this.router.navigate(['/Customer/customerdetails']);
    });
  }
  }
}
