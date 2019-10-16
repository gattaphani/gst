import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2cdnformComponent } from './gstr2cdnform.component';

describe('Gstr2cdnformComponent', () => {
  let component: Gstr2cdnformComponent;
  let fixture: ComponentFixture<Gstr2cdnformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gstr2cdnformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2cdnformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
