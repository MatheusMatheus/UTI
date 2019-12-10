import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributoMonitoravelComponent } from './atributo-monitoravel.component';

describe('AtributoMonitoravelComponent', () => {
  let component: AtributoMonitoravelComponent;
  let fixture: ComponentFixture<AtributoMonitoravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributoMonitoravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributoMonitoravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
