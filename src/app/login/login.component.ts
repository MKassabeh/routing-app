import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() valuePswd : string = ""
  @Input() valueUser : string = ""


  // create(){
  //   if(this.valueUser!=""&&this.valuePswd!=""){
  //     this.btn=""
  //   }else{
  //     this.btn="disabled"
  //   }
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
