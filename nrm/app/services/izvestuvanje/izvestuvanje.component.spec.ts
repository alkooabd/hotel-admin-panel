import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestuvanjeComponent } from './izvestuvanje.component';

describe('IzvestuvanjeComponent', () => {
  let component: IzvestuvanjeComponent;
  let fixture: ComponentFixture<IzvestuvanjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IzvestuvanjeComponent]
    });
    fixture = TestBed.createComponent(IzvestuvanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
