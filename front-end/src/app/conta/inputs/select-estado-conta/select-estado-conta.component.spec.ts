import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEstadoContaComponent } from './select-estado-conta.component';

describe('SelectEstadoContaComponent', () => {
  let component: SelectEstadoContaComponent;
  let fixture: ComponentFixture<SelectEstadoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEstadoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEstadoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
