import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2b2burComponent } from './gstr2b2bur.component';

describe('Gstr2b2burComponent', () => {
  let component: Gstr2b2burComponent;
  let fixture: ComponentFixture<Gstr2b2burComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2b2burComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2b2burComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
