import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3b2formComponent } from './gstr3b2form.component';

describe('Gstr3b2formComponent', () => {
  let component: Gstr3b2formComponent;
  let fixture: ComponentFixture<Gstr3b2formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr3b2formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3b2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
