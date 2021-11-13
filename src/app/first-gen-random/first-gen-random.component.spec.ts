import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGenRandomComponent } from './first-gen-random.component';

describe('FirstGenRandomComponent', () => {
  let component: FirstGenRandomComponent;
  let fixture: ComponentFixture<FirstGenRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstGenRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGenRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
