import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressaoComponent } from './pressao.component';

describe('PressaoComponent', () => {
  let component: PressaoComponent;
  let fixture: ComponentFixture<PressaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
