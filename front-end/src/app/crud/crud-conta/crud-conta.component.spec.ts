import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContaComponent } from './crud-conta.component';

describe('CrudContaComponent', () => {
  let component: CrudContaComponent;
  let fixture: ComponentFixture<CrudContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
