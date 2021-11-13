import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexFirstGenComponent } from './pokedex-first-gen.component';

describe('PokedexFirstGenComponent', () => {
  let component: PokedexFirstGenComponent;
  let fixture: ComponentFixture<PokedexFirstGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexFirstGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexFirstGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
