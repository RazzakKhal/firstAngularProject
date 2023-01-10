import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetageComponent } from './requetage.component';

describe('RequetageComponent', () => {
  let component: RequetageComponent;
  let fixture: ComponentFixture<RequetageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequetageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequetageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
