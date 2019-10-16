import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2b2bformComponent } from './gstr2b2bform.component';

describe('Gstr2b2bformComponent', () => {
  let component: Gstr2b2bformComponent;
  let fixture: ComponentFixture<Gstr2b2bformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2b2bformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2b2bformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
