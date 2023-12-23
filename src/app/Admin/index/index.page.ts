import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
requestlength:any;
  constructor() { }

  ngOnInit() {
  }
  // PlaySound()
  // {
  //   let audio= new Audio;
  //   audio.src="../../../assets/m.wav";
  //   audio.load();
  //   audio.play();
  //   alert("New Candidate added");
  //   localStorage.setItem('sessionlength',this.requestlength)
  // }
}
