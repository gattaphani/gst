import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3bviewComponent } from './gstr3bview.component';

describe('Gstr3bviewComponent', () => {
  let component: Gstr3bviewComponent;
  let fixture: ComponentFixture<Gstr3bviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr3bviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3bviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
