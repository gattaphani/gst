import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3b1formComponent } from './gstr3b1form.component';

describe('Gstr3b1formComponent', () => {
  let component: Gstr3b1formComponent;
  let fixture: ComponentFixture<Gstr3b1formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr3b1formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3b1formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
