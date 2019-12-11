import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDialogoOutroTerminalComponent } from './caixa-dialogo-outro-terminal.component';

describe('CaixaDialogoOutroTerminalComponent', () => {
  let component: CaixaDialogoOutroTerminalComponent;
  let fixture: ComponentFixture<CaixaDialogoOutroTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDialogoOutroTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDialogoOutroTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
