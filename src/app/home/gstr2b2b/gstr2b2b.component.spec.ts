import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2b2bComponent } from './gstr2b2b.component';

describe('Gstr2b2bComponent', () => {
  let component: Gstr2b2bComponent;
  let fixture: ComponentFixture<Gstr2b2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2b2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2b2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
