import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  @Input() id = 0 ;

  @Input() name = ""; 

  
  
  constructor(public router: Router,
    public api: PokemonService  ,
    public monService: ActivatedRoute) { }

  ngOnInit(): void {
    document.getElementById('')

  }
  

}
