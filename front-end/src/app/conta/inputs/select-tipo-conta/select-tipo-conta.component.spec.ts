import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTipoContaComponent } from './select-tipo-conta.component';

describe('SelectTipoContaComponent', () => {
  let component: SelectTipoContaComponent;
  let fixture: ComponentFixture<SelectTipoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTipoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTipoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
