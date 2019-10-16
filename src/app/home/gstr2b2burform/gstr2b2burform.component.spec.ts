import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2b2burformComponent } from './gstr2b2burform.component';

describe('Gstr2b2burformComponent', () => {
  let component: Gstr2b2burformComponent;
  let fixture: ComponentFixture<Gstr2b2burformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2b2burformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2b2burformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
