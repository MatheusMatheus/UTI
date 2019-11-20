import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStatusClienteComponent } from './select-estado-conta.component';

describe('SelectEstadoContaComponent', () => {
  let component: SelectStatusClienteComponent;
  let fixture: ComponentFixture<SelectStatusClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStatusClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStatusClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
