import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseCakeComponent } from './cheese-cake.component';

describe('CheeseCakeComponent', () => {
  let component: CheeseCakeComponent;
  let fixture: ComponentFixture<CheeseCakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheeseCakeComponent]
    });
    fixture = TestBed.createComponent(CheeseCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
