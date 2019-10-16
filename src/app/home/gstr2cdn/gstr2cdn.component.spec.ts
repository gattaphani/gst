import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2cdnComponent } from './gstr2cdn.component';

describe('Gstr2cdnComponent', () => {
  let component: Gstr2cdnComponent;
  let fixture: ComponentFixture<Gstr2cdnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2cdnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2cdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
