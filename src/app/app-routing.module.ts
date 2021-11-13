import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { GuestComponent } from './guest/guest.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'create', component: CreateComponent },
    { path: 'guest', component: GuestComponent },
    { path: 'loged', component: LoginPageComponent },
    { path:'loged/pokedex', component: PokedexComponent },
    { path:'loged/pokedex/detail/:id', component: PokemonCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
