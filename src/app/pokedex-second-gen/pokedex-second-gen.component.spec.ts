import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexSecondGenComponent } from './pokedex-second-gen.component';

describe('PokedexSecondGenComponent', () => {
  let component: PokedexSecondGenComponent;
  let fixture: ComponentFixture<PokedexSecondGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexSecondGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexSecondGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
