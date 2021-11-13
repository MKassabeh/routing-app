import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService  } from '../service/pokemon.service';

@Component({
  selector: 'app-first-gen-random',
  templateUrl: './first-gen-random.component.html',
  styleUrls: ['./first-gen-random.component.css']
})
export class FirstGenRandomComponent implements OnInit {

  @Input()  user = "" ;
  @Input() img="";

  constructor(public router: Router,
    public api: PokemonService  ,
    public monService: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
