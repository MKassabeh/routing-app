import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() id : number = 0 ;
  @Input() name : string ="";
  @Input() img : string = "";
  
  constructor(public router: Router,
    public api: PokemonService,
    public monService: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.monService.snapshot.params['id'];
    console.log(this.id)
    const beer = this.api.getBookId(this.id)
    this.name= beer.name;
    this.img = beer.image_url; 
  }

}
