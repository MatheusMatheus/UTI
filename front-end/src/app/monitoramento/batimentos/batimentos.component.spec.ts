import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentosComponent } from './batimentos.component';

describe('BatimentosComponent', () => {
  let component: BatimentosComponent;
  let fixture: ComponentFixture<BatimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
