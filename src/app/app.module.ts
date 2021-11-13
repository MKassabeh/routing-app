import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RandomShowPipe } from './random-show.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { GuestComponent } from './guest/guest.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PokedexFirstGenComponent } from './pokedex-first-gen/pokedex-first-gen.component';
import { PokedexSecondGenComponent } from './pokedex-second-gen/pokedex-second-gen.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HeaderComponent } from './header/header.component';
import { FirstGenRandomComponent } from './first-gen-random/first-gen-random.component';
import { PokemonPokedexComponent } from './pokemon-pokedex/pokemon-pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    GuestComponent,
    LoginPageComponent,
    PokedexFirstGenComponent,
    PokedexSecondGenComponent,
    PokedexComponent,
    PokemonCardComponent,
    HeaderComponent,
    RandomShowPipe,
    FirstGenRandomComponent,
    PokemonPokedexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
