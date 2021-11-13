import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService  } from '../service/pokemon.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input()  user = "" ;
  @Input() img="";

  constructor(public router: Router,
    public api: PokemonService  ,
    public monService: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
