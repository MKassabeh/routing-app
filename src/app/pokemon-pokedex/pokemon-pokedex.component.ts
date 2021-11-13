import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-pokedex',
  templateUrl: './pokemon-pokedex.component.html',
  styleUrls: ['./pokemon-pokedex.component.css']
})
  export class PokemonPokedexComponent implements OnInit {
    @Input() id : number = 0 ;
    @Input() name : string ="";
    @Input() img : string = "";
    
    constructor(public router: Router,
      public api: PokemonService,
      public monService: ActivatedRoute) { }
  
    ngOnInit(): void {
    }
  
  }